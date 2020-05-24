import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { PhotogalleryService } from '../photogallery.service';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'pgl-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  uploadUrl:string = "https://localhost:44346/api/Photogallery?userName=";
  constructor(private messageService: MessageService, public photoGallerySvc:PhotogalleryService, private _msalService: MsalService) { }

  ngOnInit() {
    const account = this._msalService.getAccount();debugger;
    this.uploadUrl = this.uploadUrl + account.userName;
    this.photoGallerySvc.uploadedFiles = [];
  }

  onUpload(event) {
    for (let file of event.files) {
      this.photoGallerySvc.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
