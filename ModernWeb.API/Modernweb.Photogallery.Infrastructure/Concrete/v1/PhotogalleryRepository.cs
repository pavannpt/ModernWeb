using Microsoft.Azure.Storage.Blob;
using Modernweb.Photogallery.Core.Interface.v1;
using Modernweb.Photogallery.Infrastructure.Interface.v1;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Modernweb.Photogallery.Infrastructure.Concrete.v1
{
    public class PhotogalleryRepository: IPhotogalleryRepository
    {
        private readonly ICloudStorageHelper _cloudStorageHelper;
        public PhotogalleryRepository(ICloudStorageHelper cloudStorageHelper)
        {
            _cloudStorageHelper = cloudStorageHelper;
        }

        public Task<IEnumerable<CloudBlockBlob>> ListFilesAsync(string prefix = null, bool includeSnapshots = false)
        {
            return _cloudStorageHelper.ListFilesAsync(prefix, includeSnapshots); 
        }

        public Task<CloudBlockBlob> UploadFileAsync(byte[] fileByteArray, string blobname)
        {
            return _cloudStorageHelper.UploadFileAsync(fileByteArray, blobname);
        }
    }
}
