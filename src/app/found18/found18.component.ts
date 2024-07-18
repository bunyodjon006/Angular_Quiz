import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found18',
  templateUrl: './found18.component.html',
  styleUrls: ['./found18.component.scss']
})
export class Found18Component {
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
    this.router.navigate(['/found19']);
  }

  
}
