import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found14',
  templateUrl: './found14.component.html',
  styleUrls: ['./found14.component.scss']
})
export class Found14Component {
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
    this.router.navigate(['/found15']);
  }
ol:string="<ol>";
ul:string="<ul>";
list:string="<list>";
li:string="<li>"
}
