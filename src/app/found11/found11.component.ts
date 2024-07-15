import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found11',
  templateUrl: './found11.component.html',
  styleUrls: ['./found11.component.scss']
})
export class Found11Component {
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
    this.router.navigate(['/found12']);
  }
move:string="<movie>";
video:string="<video>";
film:string="<film>";
media:string="<media>";


}
