import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found20',
  templateUrl: './found20.component.html',
  styleUrls: ['./found20.component.scss']
})
export class Found20Component {
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
    this.router.navigate(['/found21']);
  }
  span:string="<span>"
}
