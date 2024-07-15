import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found7',
  templateUrl: './found7.component.html',
  styleUrls: ['./found7.component.scss']
})
export class Found7Component {
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
    this.router.navigate(['/found8']);
  }

tab:string="<table></table>"
}
