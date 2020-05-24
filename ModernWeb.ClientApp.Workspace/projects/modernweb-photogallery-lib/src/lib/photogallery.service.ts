import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class PhotogalleryService {

  url = "https://localhost:44346/api/photogallery?userName=";
  public uploadedFiles: any[] = [];

  constructor(private http:HttpClient, private msalSvc:MsalService) { }

  public LoadImages(){
    var userName = this.msalSvc.getAccount().userName;
    this.url = this.url + userName;
    return this.http.get(this.url);
  }
}
