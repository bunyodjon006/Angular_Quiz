import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found10',
  templateUrl: './found10.component.html',
  styleUrls: ['./found10.component.scss']
})
export class Found10Component {
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
    this.router.navigate(['/found11']);
  }
div:string="<div></div>"
}
