import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { interval, timer } from 'rxjs';
@Component({
  selector: 'app-found3',
  templateUrl: './found3.component.html',
  styleUrls: ['./found3.component.scss']
})
export class Found3Component {
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
    this.router.navigate(['/found4']);
  }
  doctype:string='<!DOCTYPE html>'
}
