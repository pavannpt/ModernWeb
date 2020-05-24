using Microsoft.Azure.Storage.Blob;
using Modernweb.Photogallery.Core.Interface.v1;
using Modernweb.Photogallery.Infrastructure.Interface.v1;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Modernweb.Photogallery.Infrastructure.Concrete.v1
{
    public class PhotogalleryRepository : IPhotogalleryRepository
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

        public async Task<CloudBlockBlob> UploadFileAsync(byte[] byteArr, string blobname)
        {
            return await _cloudStorageHelper.UploadFileAsync(byteArr, blobname);
        }

        #region commented
        //private Bitmap ResizeImage(Image image, Size size, bool preserveAspectRatio = true)
        //{
        //    int newWidth;
        //    int newHeight;
        //    if (preserveAspectRatio)
        //    {
        //        int originalWidth = image.Width;
        //        int originalHeight = image.Height;
        //        float percentWidth = (float)size.Width / (float)originalWidth;
        //        float percentHeight = (float)size.Height / (float)originalHeight;
        //        float percent = percentHeight < percentWidth ? percentHeight : percentWidth;
        //        newWidth = (int)(originalWidth * percent);
        //        newHeight = (int)(originalHeight * percent);
        //    }
        //    else
        //    {
        //        newWidth = size.Width;
        //        newHeight = size.Height;
        //    }
        //    Bitmap newImage = new Bitmap(newWidth, newHeight);
        //    using (Graphics graphicsHandle = Graphics.FromImage(newImage))
        //    {
        //        graphicsHandle.InterpolationMode = InterpolationMode.HighQualityBicubic;
        //        graphicsHandle.DrawImage(image, 0, 0, newWidth, newHeight);
        //    }
        //    return newImage;
        //}

        //private byte[] BitmapToByteArray(Bitmap bitmap)
        //{
        //    BitmapData bmpdata = null;
        //    try
        //    {
        //        bmpdata = bitmap.LockBits(new Rectangle(0, 0, bitmap.Width, bitmap.Height), ImageLockMode.ReadOnly, bitmap.PixelFormat);
        //        int numbytes = bmpdata.Stride * bitmap.Height;
        //        byte[] bytedata = new byte[numbytes];
        //        IntPtr ptr = bmpdata.Scan0;

        //        Marshal.Copy(ptr, bytedata, 0, numbytes);

        //        return bytedata;
        //    }
        //    finally
        //    {
        //        if (bmpdata != null)
        //            bitmap.UnlockBits(bmpdata);
        //    }
        //}
        #endregion
    }
}
