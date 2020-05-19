using Microsoft.Azure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Modernweb.Photogallery.Core.Interface.v1
{
    public interface ICloudStorageHelper
    {
        Task<IEnumerable<CloudBlockBlob>> ListFilesAsync(string prefix = null, bool includeSnapshots = false);
        Task<CloudBlockBlob> UploadFileAsync(byte[] fileByteArray, string blobname);
    }
}
