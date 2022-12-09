import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { enviroment } from './../environment/environment';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    private apiServerUrl = enviroment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/employee/all`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/api/v1/employee/add`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/api/v1/employee/update`, employee);
    }

    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/employee/delete/${employeeId}`);
    }
}