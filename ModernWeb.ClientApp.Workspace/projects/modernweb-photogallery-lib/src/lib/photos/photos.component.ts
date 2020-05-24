import { Component, OnInit } from '@angular/core';
import { PhotogalleryService } from '../photogallery.service';
import { ImageResponse } from '../models/image-response.model';

@Component({
  selector: 'pgl-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  PhotoAreaStyle: string;
  displayModal: boolean;
  images: ImageResponse[];

  constructor(private photoGallerySvc: PhotogalleryService) { }

  ngOnInit() {
    this.PhotoAreaStyle = "photoarea";
    debugger;
    this.LoadImages();
  }

  LoadImages() {
    this.photoGallerySvc.LoadImages().subscribe((data: ImageResponse[]) => {
      this.images = data;
    });
  }

  showModalDialog() {
    this.displayModal = true;
  }

  onDialogClose() {
    if (this.photoGallerySvc.uploadedFiles.length > 0) {
      this.photoGallerySvc.LoadImages().subscribe((data: ImageResponse[]) => {
        this.images = data;
        this.photoGallerySvc.uploadedFiles = [];
      }, error => console.error(error));
    }
  }

  DeleteImage(_filename) {
    var del = confirm('Are you sure want to delete this file');
    if (!del) return;

    this.photoGallerySvc.DeleteImage(_filename).subscribe((data: boolean) => {
      this.photoGallerySvc.LoadImages().subscribe((data: ImageResponse[]) => {
        this.images = data;
        this.photoGallerySvc.uploadedFiles = [];
      }, error => console.error(error))
    }, error => console.error(error));
  }

}
