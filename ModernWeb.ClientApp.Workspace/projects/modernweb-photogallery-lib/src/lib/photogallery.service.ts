import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotogalleryService {

  url = "https://localhost:44346/api/photogallery";

  constructor(private http:HttpClient) { }

  public LoadImages(){
    return this.http.get(this.url);
  }
}
