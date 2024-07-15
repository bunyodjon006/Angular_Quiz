import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found5',
  templateUrl: './found5.component.html',
  styleUrls: ['./found5.component.scss']
})
export class Found5Component {
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
    this.router.navigate(['/found6']);
  }
picture:string="<picture>";
img:string="<img>";
image:string="<image>";
src:string="<src>"

}
