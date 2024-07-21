import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found24',
  templateUrl: './found24.component.html',
  styleUrls: ['./found24.component.scss']
})
export class Found24Component {
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
    this.router.navigate(['/found25']);
  }
  span:string="<span>"
}
