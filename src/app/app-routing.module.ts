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
import { Found18Component } from './found18/found18.component';
import { Found19Component } from './found19/found19.component';
import { Found20Component } from './found20/found20.component';
import { Found21Component } from './found21/found21.component';
import { Found22Component } from './found22/found22.component';
import { Found23Component } from './found23/found23.component';
import { Found24Component } from './found24/found24.component';
import { Found25Component } from './found25/found25.component';
import { Found26Component } from './found26/found26.component';
import { Found27Component } from './found27/found27.component';
import { Found29Component } from './found29/found29.component';
import { Found28Component } from './found28/found28.component';
import { Found30Component } from './found30/found30.component';
import { Found31Component } from './found31/found31.component';
import { Found32Component } from './found32/found32.component';
import { Found33Component } from './found33/found33.component';
import { Found34Component } from './found34/found34.component';
import { Found35Component } from './found35/found35.component';
import { Found36Component } from './found36/found36.component';
import { Found37Component } from './found37/found37.component';
import { Found39Component } from './found39/found39.component';
import { Found38Component } from './found38/found38.component';
import { Found40Component } from './found40/found40.component';

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
  {path:'found17',component:Found17Component},
  {path:'found18',component:Found18Component},
  {path:'found19',component:Found19Component},
  {path:'found20',component:Found20Component},
  {path:'found21',component:Found21Component},
  {path:'found22',component:Found22Component},
  {path:'found23',component:Found23Component},
  {path:'found24',component:Found24Component},
  {path:'found25',component:Found25Component},
  {path:'found26',component:Found26Component},
  {path:'found27',component:Found27Component},
  {path:'found28',component:Found28Component},
  {path:'found29',component:Found29Component},
  {path:'found30',component:Found30Component},
  {path:'found31',component:Found31Component},
  {path:'found32',component:Found32Component},
  {path:'found33',component:Found33Component},
  {path:'found34',component:Found34Component},
  {path:'found35',component:Found35Component},
  {path:'found36',component:Found36Component},
  {path:'found37',component:Found37Component},
  {path:'found38',component:Found38Component},
  {path:'found39',component:Found39Component},
  {path:'found40',component:Found40Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
