using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Modernweb.Photogallery.Infrastructure.Interface.v1;
using System;
using System.IO;
using System.Net.Http.Headers;
using System.Linq;
using Microsoft.Azure.Storage.Blob;

namespace ModernWeb.Photogallery.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PhotogalleryController : ControllerBase
    {
        private readonly IPhotogalleryRepository _photoGalleryRepository;

        public PhotogalleryController(IPhotogalleryRepository photoGalleryRepository)
        {
            _photoGalleryRepository = photoGalleryRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var sharedAccessBlobPolicy = new SharedAccessBlobPolicy
            {
                Permissions = SharedAccessBlobPermissions.Read,
                SharedAccessExpiryTime = DateTime.Now.AddDays(1)
            };

            var blobs = _photoGalleryRepository.ListFilesAsync();
            string sasToken = blobs.Result.ElementAt(0).Container.GetSharedAccessSignature(sharedAccessBlobPolicy);
            var urls = blobs.Result.Select(b => b.StorageUri.PrimaryUri.AbsoluteUri + sasToken);
            return Ok(urls);
        }

        [HttpPut]
        public IActionResult Put()
        {
            return Ok();
        }

        [HttpPost]  
        public IActionResult Post()
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
                            file.CopyTo(ms);
                            var fileBytes = ms.ToArray();
                            var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                            _photoGalleryRepository.UploadFileAsync(fileBytes, fileName);
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