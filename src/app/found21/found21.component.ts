import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found21',
  templateUrl: './found21.component.html',
  styleUrls: ['./found21.component.scss']
})
export class Found21Component {
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
    this.router.navigate(['/found22']);
  }
  span:string="<span>"
}
