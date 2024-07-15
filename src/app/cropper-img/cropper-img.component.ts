import { Component, computed, inject, Input, signal } from '@angular/core';
import { CropperDialogResult, DialogDataComponent } from '../dialog-data/dialog-data.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cropper-img',
  templateUrl: './cropper-img.component.html',
  styleUrls: ['./cropper-img.component.scss']
})
export class CropperImgComponent {
ImageWidth=signal(0);
@Input() set width(val:number){
  this.ImageWidth.set(val);
}
ImageHeight=signal(0);
@Input() set height(val:number){
  this.ImageHeight.set(val);
}
Placeholder=computed(()=>`https://placehold.co/${this.ImageWidth()}x${this.ImageHeight()}`);
croppedImage=signal <CropperDialogResult | undefined>(undefined);
dialog=inject(MatDialog);
fileSelected(event:any){
  const file=event.target.files[0];
  if(file){
 const dialogRef=this.dialog.open(DialogDataComponent, {
  data : {image:file,width:this.ImageWidth(), height:this.ImageHeight()},
  width:'590px'
 });
 dialogRef.afterClosed().pipe(filter(result => !!result)).subscribe(
  (result)=>{
    this.croppedImage.set(result);
  }
 )
  }
}
imageSource=computed(()=>{
  if(this.croppedImage()){
    return this.croppedImage()?.ImageUrl;
}
  return this.Placeholder();
})
}
