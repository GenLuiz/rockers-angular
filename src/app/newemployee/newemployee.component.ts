import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee/employee';
import {EmployeeService} from '../employee-service/employee.service';
import { Team } from '../team/team';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  employee: Employee;
  private employeeService: EmployeeService
  
  constructor() { }

  ngOnInit() {
    this.employee = new Employee();
  }

  save():void{
    this.employeeService.createEmployee(this.employee);
  }

}
