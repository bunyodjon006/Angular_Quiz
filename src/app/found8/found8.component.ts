import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found8',
  templateUrl: './found8.component.html',
  styleUrls: ['./found8.component.scss']
})
export class Found8Component {
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
    this.router.navigate(['/found9']);
  }
head:string="<head>"
}
