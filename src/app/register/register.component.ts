import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  OnClick(){
    this.router.navigate(['/modul'])
  }
  constructor(private router:Router){}
}
