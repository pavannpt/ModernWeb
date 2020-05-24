using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using Modernweb.Photogallery.Core.Interface.v1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Modernweb.Photogallery.Core.Concrete.v1
{
    public class CloudStorageHelper : ICloudStorageHelper
    {
        private readonly string _containerName = "photogallery";
        private readonly string _connectionString;

        public CloudStorageHelper()
        {
            _connectionString = Constants.AzureStorageConnectionString;
        }

        public async Task<IEnumerable<CloudBlockBlob>> ListFilesAsync(string prefix = null, bool includeSnapshots = false)
        {
            var cloudBlockBlobs = new List<CloudBlockBlob>();
            var cloudBlobContainer = await GetImageContainerAsync();

            BlobContinuationToken token = null;
            do
            {
                var blobListingDetails = BlobListingDetails.Metadata;

                if (includeSnapshots)
                {
                    blobListingDetails |= BlobListingDetails.Snapshots;
                }

                var blobResultSegment =
                  await cloudBlobContainer.ListBlobsSegmentedAsync(prefix, true,
                    blobListingDetails, 100, token, null, null);

                token = blobResultSegment.ContinuationToken;
                cloudBlockBlobs.AddRange(blobResultSegment.Results.OfType<CloudBlockBlob>());
            }
            while (token != null);

            return cloudBlockBlobs;
        }

        public async Task<CloudBlockBlob> UploadFileAsync(byte[] fileByteArray, string blobname)
        {
            var cloudBlobContainer = await GetImageContainerAsync();

            var cloudBlockBlob = cloudBlobContainer.GetBlockBlobReference(blobname);

            cloudBlockBlob.Properties.ContentType = "image/jpeg";

            await cloudBlockBlob.UploadFromByteArrayAsync(fileByteArray, 0, fileByteArray.Length);

            return cloudBlockBlob;
        }

        private async Task<CloudBlobContainer> GetImageContainerAsync()
        {
            var cloudStorageAccount = CloudStorageAccount.Parse(_connectionString);

            var cloudBlobClient = cloudStorageAccount.CreateCloudBlobClient();

            var cloudBlobContainer = cloudBlobClient.GetContainerReference(_containerName);
            await cloudBlobContainer.CreateIfNotExistsAsync(
              BlobContainerPublicAccessType.Blob, null, null);

            return cloudBlobContainer;
        }
    }
}
