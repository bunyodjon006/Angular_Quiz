import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found12',
  templateUrl: './found12.component.html',
  styleUrls: ['./found12.component.scss']
})
export class Found12Component {
  data:number=0;
  test:boolean=false;
  constructor(private router:Router){

  }
  Onbutton(){
    this.test=true;
   





  }
  calc(){
this.data+=1;
  }
  goQuiz(){
    this.router.navigate(['/found13']);
  }
head:string="<head>";
body:string="<body>";
header:string="<header>";
footer:string="<footer>";
title:string="<title>";
div:string="<div>";
span:string="<span>";
}
