import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(environment.apiUrl + '/employee');
  }

  getEmployee(employeeId: number): Observable<Employee> {
    return this._http.get<Employee>(environment.apiUrl + '/employee/' + employeeId);
  }
}
