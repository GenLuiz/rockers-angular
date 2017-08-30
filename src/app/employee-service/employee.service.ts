import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employee } from '../employee/employee';

@Injectable()
export class EmployeeService {

    private employeeUrl = '/employee';  // URL to web api
  
    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getEmployees(): Promise<Employee[]> {
        return this.http.get(this.employeeUrl, {responseType: ResponseContentType.Json})
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }

    getEmployee(id: number): Promise<Employee> {
        const url = `${this.employeeUrl}/${id}`;
        return this.http.get(url).toPromise()
            .then(response => response.json().data as Employee)
            .catch(this.handleError);
    }
}
