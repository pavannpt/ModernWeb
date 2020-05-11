import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PhotoGalleryRoutingModule } from './photogallery-routing.module';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
import {DialogModule} from 'primeng/dialog';
import { MessageService } from 'primeng/api';

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
  providers:[MessageService]
})
export class PhotoGalleryModule { }
