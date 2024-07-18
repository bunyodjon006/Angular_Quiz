import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found19',
  templateUrl: './found19.component.html',
  styleUrls: ['./found19.component.scss']
})
export class Found19Component {
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
    this.router.navigate(['/found20']);
  }
  span:string="<span>"
}
