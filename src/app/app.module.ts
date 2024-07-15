import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { ModulComponent } from './modul/modul.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoundComponent } from './found/found.component';
import { Found2Component } from './found2/found2.component';
import { Found3Component } from './found3/found3.component';
import { Found4Component } from './found4/found4.component';
import { Found5Component } from './found5/found5.component';
import { Found6Component } from './found6/found6.component';
import { Found7Component } from './found7/found7.component';
import { Found8Component } from './found8/found8.component';
import { Found9Component } from './found9/found9.component';
import { Found10Component } from './found10/found10.component';
import { Found11Component } from './found11/found11.component';
import { Found12Component } from './found12/found12.component';
import { Found13Component } from './found13/found13.component';
import { Found14Component } from './found14/found14.component';
import { Found15Component } from './found15/found15.component';
import { Found16Component } from './found16/found16.component';
import { Found17Component } from './found17/found17.component';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { CropperImgComponent } from './cropper-img/cropper-img.component';
import { DialogDataComponent } from './dialog-data/dialog-data.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ModulComponent,
    TypescriptComponent,
    FoundComponent,
    Found2Component,
    Found3Component,
    Found4Component,
    Found5Component,
    Found6Component,
    Found7Component,
    Found8Component,
    Found9Component,
    Found10Component,
    Found11Component,
    Found12Component,
    Found13Component,
    Found14Component,
    Found15Component,
    Found16Component,
    Found17Component,
    CropperImgComponent,
    DialogDataComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  HttpClientModule,
    ImageCropperComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
