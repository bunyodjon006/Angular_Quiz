import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.scss']
})
export class FoundComponent  implements OnInit{
  constructor(private router:Router){}
  data:number=0 ;
  test:boolean=false;
  ngOnInit(): void {
 
  }
  Onbutton(){
    this.test=true;
   




  }
  calc(){
this.data+=1;
  }
  goQuiz(){
this.router.navigate(['/found2'])
  }
}
