import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {EmployeeComponent} from '../employee/employee.component';
import {LoginComponent} from '../login/login.component';
import { NewemployeeComponent } from '../newemployee/newemployee.component';
import { SuccessComponent } from '../success/success.component';

const routes: Routes=[
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'employee', component:EmployeeComponent
  },
  {
    path:'newemployee', component: NewemployeeComponent
  },
  {
    path:'success', component: SuccessComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
 exports:[RouterModule]
})
export class AppRoutingModule { }
