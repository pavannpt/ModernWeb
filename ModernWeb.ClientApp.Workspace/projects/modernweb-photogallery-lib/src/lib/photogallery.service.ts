import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class PhotogalleryService {
  //url = "https://localhost:44346/api/photogallery?userName=";
  url = "https://modernwebphotogalleryapi.azurewebsites.net/api/photogallery?userName=";
  public uploadedFiles: any[] = [];

  constructor(private http:HttpClient, private msalSvc:MsalService) { }

  public LoadImages(){
    debugger;
    var _url = this.GetUrl();
    return this.http.get(_url);
  }

  DeleteImage(filename) {
    debugger;
    var _url = this.url.replace("userName", "fileName") + filename;
    return this.http.delete(_url);
  }

  private GetUrl(){
    var _url = this.url;
    const account = this.msalSvc.getAccount();
    var userName = "";
    if(account !=  null && account != undefined){
      userName = account.userName;
    }

    if(this.url.indexOf(userName) < 0)
      _url = _url + userName;

    return _url;
  }
}
