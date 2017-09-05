import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from '../employee-service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  getEmployees():void{
    this.employeeService.getEmployees()
    .then(employees => {this.employees = employees; console.log(employees)});
  }

  ngOnInit() {
    this.getEmployees();
  }
}
