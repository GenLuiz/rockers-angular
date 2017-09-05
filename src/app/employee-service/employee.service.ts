import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employee } from '../employee/employee';

@Injectable()
export class EmployeeService {

    private employeeUrl = 'http://localhost:8585/rockers-api/employee';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    private http: Http;
    
    constructor() { }

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
            .then(response => response.json() as Employee)
            .catch(this.handleError);
    }

    createEmployee(employee:Employee):Promise<string>{
        return this.http.post(this.employeeUrl, JSON.stringify(employee), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as string)
        .catch(this.handleError)
    }
}
