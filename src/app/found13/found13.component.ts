import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found13',
  templateUrl: './found13.component.html',
  styleUrls: ['./found13.component.scss']
})
export class Found13Component {
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
    this.router.navigate(['/found14']);
  }
a:string="<a>";
link:string="<link>";
href:string="<href>";
url:string="<url>";

}

