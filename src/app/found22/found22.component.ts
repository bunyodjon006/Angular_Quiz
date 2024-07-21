import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found22',
  templateUrl: './found22.component.html',
  styleUrls: ['./found22.component.scss']
})
export class Found22Component {
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
    this.router.navigate(['/found23']);
  }
  span:string="<span>"
}
