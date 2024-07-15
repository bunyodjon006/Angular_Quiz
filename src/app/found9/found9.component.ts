import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found9',
  templateUrl: './found9.component.html',
  styleUrls: ['./found9.component.scss']
})
export class Found9Component {
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
    this.router.navigate(['/found10']);
  }
form:string="<form></form>"
}
