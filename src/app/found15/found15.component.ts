import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found15',
  templateUrl: './found15.component.html',
  styleUrls: ['./found15.component.scss']
})
export class Found15Component {
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
    this.router.navigate(['/found16']);
  }
  span:string="<span>"

}
