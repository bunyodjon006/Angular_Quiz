import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found6',
  templateUrl: './found6.component.html',
  styleUrls: ['./found6.component.scss']
})
export class Found6Component {
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
    this.router.navigate(['/found7']);
  }
picture:string="<picture>";
img:string="<img>";
image:string="<image>";
src:string="<src>"
met:string="<meta charset='\UTF-8'\> tegining vazifasi nima?"
}
