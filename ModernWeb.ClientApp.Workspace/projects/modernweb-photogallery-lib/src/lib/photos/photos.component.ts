import { Component, OnInit } from '@angular/core';
import { PhotogalleryService } from '../photogallery.service';

@Component({
  selector: 'pgl-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  PhotoAreaStyle: string;
  displayModal: boolean;
  images: String[];

  constructor(private photoGallerySvc: PhotogalleryService) { }

  ngOnInit() {
    this.PhotoAreaStyle = "photoarea";
    debugger;
    this.LoadImages();
  }

  LoadImages() {
    this.photoGallerySvc.LoadImages().subscribe((data: String[]) => {
      this.images = data;
    });
  }

  showModalDialog() {
    this.displayModal = true;
  }

  onDialogClose() {
    if (this.photoGallerySvc.uploadedFiles.length > 0) {
      this.photoGallerySvc.LoadImages().subscribe((data: String[]) => {
        this.images = data;
        this.photoGallerySvc.uploadedFiles = [];
      });
    }
  }
}
