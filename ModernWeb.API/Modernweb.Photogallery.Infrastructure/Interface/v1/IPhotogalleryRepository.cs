using Microsoft.Azure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Text;
using System.Threading.Tasks;

namespace Modernweb.Photogallery.Infrastructure.Interface.v1
{
    public interface IPhotogalleryRepository
    {
        Task<IEnumerable<CloudBlockBlob>> ListFilesAsync(string prefix = null, bool includeSnapshots = false);
        Task<CloudBlockBlob> UploadFileAsync(byte[] byteArr, string blobname);
        bool DeleteFile(string fileName);
    }
}
