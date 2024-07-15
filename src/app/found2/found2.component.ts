import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-found2',
  templateUrl: './found2.component.html',
  styleUrls: ['./found2.component.scss']
})
export class Found2Component {
  constructor(private router:Router){}
  title:string='<title></title>';
  h1:string='<h1></h1>';
  meta:string='<meta>';
  script:string="<script></script>"
  data:number=0 ;
  test:boolean=false;
  Onbutton(){
   
this.test=true;




  }
  calc(){
this.data+=1;
  }
  goQuiz(){
    this.router.navigate(['/found3']);
  }
}
