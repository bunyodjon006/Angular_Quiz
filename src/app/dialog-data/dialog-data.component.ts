import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';

export type CropperDialogData = {
  image:File;
  width:number;
  height:number;
}

export type CropperDialogResult = {
  blob:Blob;
  ImageUrl:string;
}

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent {
data:CropperDialogData =inject(MAT_DIALOG_DATA);
result=signal <CropperDialogResult | undefined>(undefined);
ImageCropped(event:ImageCroppedEvent){
  const {blob,objectUrl}=event;
  if(blob && objectUrl){
    this.result.set({blob,ImageUrl:objectUrl})
  }
}
}
