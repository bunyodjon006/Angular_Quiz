import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found23',
  templateUrl: './found23.component.html',
  styleUrls: ['./found23.component.scss']
})
export class Found23Component {
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
    this.router.navigate(['/found24']);
  }
  span:string="<span>"
}
