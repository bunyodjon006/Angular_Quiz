import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found17',
  templateUrl: './found17.component.html',
  styleUrls: ['./found17.component.scss']
})
export class Found17Component {
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
    this.router.navigate(['/found17']);
  }
  span:string="<span>"
}
