import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContractComponent } from './contract/contract.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {EmployeeService} from './employee-service/employee.service';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    TeamComponent,
    ContractComponent,
    NavComponent,
    LoginComponent,
    NewemployeeComponent,
    SuccessComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
