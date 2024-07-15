import { Component, HostListener, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';

import * as Aos from 'aos';

@Component({
  selector: 'app-modul',
  templateUrl: './modul.component.html',
  styleUrls: ['./modul.component.scss']
})
export class ModulComponent implements OnInit {
  ngOnInit(): void {
 Aos.init()
  }
  menu:boolean=true;
  close:boolean=false;
  onClicks(){
    this.menu=true;
    this.close=true;
  }
  Close(){
    this.menu=true;
    this.close=false;
  }
  @HostListener('window:resize',['$event'])
  onResize(event:any){
 this.menu=event.target.innerWidth;
  }
}
