import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PhotoGalleryRoutingModule } from './photogallery-routing.module';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
import {DialogModule} from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { PhotogalleryService } from './photogallery.service';
import { MsalInterceptor } from '@azure/msal-angular';

@NgModule({
  declarations: [HomeComponent, FileuploadComponent, PhotosComponent],
  imports: [
    PhotoGalleryRoutingModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    CommonModule,
    HttpClientModule,
    DialogModule
  ],  
  exports: [],
  providers:[MessageService,
    PhotogalleryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor, 
      multi: true
    }]
})
export class PhotoGalleryModule { }
