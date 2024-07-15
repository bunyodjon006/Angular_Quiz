import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulComponent } from './modul/modul.component';
import { RegisterComponent } from './register/register.component';
import { FoundComponent } from './found/found.component';
import { Found2Component } from './found2/found2.component';
import { Found3Component } from './found3/found3.component';
import { Found4Component } from './found4/found4.component';
import { Found5Component } from './found5/found5.component';
import { Found6Component } from './found6/found6.component';
import { Found7Component } from './found7/found7.component';
import { Found9Component } from './found9/found9.component';
import { Found8Component } from './found8/found8.component';
import { Found10Component } from './found10/found10.component';
import { Found11Component } from './found11/found11.component';
import { Found12Component } from './found12/found12.component';
import { Found13Component } from './found13/found13.component';
import { Found14Component } from './found14/found14.component';
import { Found15Component } from './found15/found15.component';
import { Found16Component } from './found16/found16.component';
import { Found17Component } from './found17/found17.component';

const routes: Routes = [
  {path:'modul',component:ModulComponent},
  {path:'',  redirectTo:'register', pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'found',component:FoundComponent},
  {path:'found2',component:Found2Component},
  {path:'found3',component:Found3Component},
  {path:'found4',component:Found4Component},
  {path:'found5',component:Found5Component},
  {path:'found6',component:Found6Component},
  {path:'found7',component:Found7Component},
  {path:'found8',component:Found8Component},
  {path:'found9',component:Found9Component},
  {path:'found10',component:Found10Component},
  {path:'found11',component:Found11Component},
  {path:'found12',component:Found12Component},
  {path:'found13',component:Found13Component},
  {path:'found14',component:Found14Component},
  {path:'found15',component:Found15Component},
  {path:'found16',component:Found16Component},
  {path:'found17',component:Found17Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
