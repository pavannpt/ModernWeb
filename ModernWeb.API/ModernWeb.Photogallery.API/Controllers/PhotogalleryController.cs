using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Modernweb.Photogallery.Infrastructure.Interface.v1;
using System;
using System.IO;
using System.Net.Http.Headers;
using System.Linq;
using Microsoft.Azure.Storage.Blob;
using System.Drawing;
using System.Collections;
using System.Collections.Generic;

namespace ModernWeb.Photogallery.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class PhotogalleryController : ControllerBase
    {
        private readonly IPhotogalleryRepository _photoGalleryRepository;

        public PhotogalleryController(IPhotogalleryRepository photoGalleryRepository)
        {
            _photoGalleryRepository = photoGalleryRepository;
        }

        [HttpGet]
        public IActionResult Get(string userName)
        {
            List<string> urls = new List<string>();
            var sharedAccessBlobPolicy = new SharedAccessBlobPolicy
            {
                Permissions = SharedAccessBlobPermissions.Read,
                SharedAccessExpiryTime = DateTime.Now.AddDays(1)
            };

            var blobs = _photoGalleryRepository.ListFilesAsync(userName);
            if (blobs != null && blobs.Result.Count() > 0)
            {
                string sasToken = blobs.Result.ElementAt(0).Container.GetSharedAccessSignature(sharedAccessBlobPolicy);
                urls = blobs.Result.Select(b => b.StorageUri.PrimaryUri.AbsoluteUri + sasToken).ToList();
            }
            return Ok(urls);
        }

        [HttpPut]
        public IActionResult Put()
        {
            return Ok();
        }

        [HttpPost]  
        public IActionResult Post(string userName)
        {
            try
            {
                var files = Request.Form.Files;
                foreach (var file in files)
                {
                    if (file.Length > 0)
                    {
                        using (var ms = new MemoryStream())
                        {
                            file.CopyToAsync(ms);
                            var byteArr = ms.ToArray();
                            var fileName = userName + "/" + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                            _photoGalleryRepository.UploadFileAsync(byteArr, fileName);
                        }
                    }
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            return Ok();
        }
    }
}