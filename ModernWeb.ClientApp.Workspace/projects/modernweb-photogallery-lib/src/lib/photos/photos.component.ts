import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pgl-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  PhotoAreaStyle:string;
  displayModal: boolean;

  constructor() { }

  ngOnInit() {
    this.PhotoAreaStyle = "photoarea";
  }

  showModalDialog() {
    this.displayModal = true;
  }
}
