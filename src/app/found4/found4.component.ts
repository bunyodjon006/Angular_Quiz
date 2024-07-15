import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-found4',
  templateUrl: './found4.component.html',
  styleUrls: ['./found4.component.scss']
})
export class Found4Component {
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
    this.router.navigate(['/found5']);
  }
 
  strong:string="<strong></strong>"
  em:string="<em></em>";
  italic="<italic></italic>";
  bold:string="<bold></bold>"
}
