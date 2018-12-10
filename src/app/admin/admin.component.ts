import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DoctorService } from '../services/doctor.service';
import { EmployeeService } from '../services/employee.service';
import { Doctor } from '../models/doctor';
import { Employee } from '../models/employee';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  doctors: Doctor[] = [];
  employees: Employee[] = [];

  constructor(
    private _doctorService: DoctorService,
    private _employeeService: EmployeeService,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this._doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      console.log(doctors);
    });
    this._employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      console.log(employees);
    });
  }

  onChange(event, user) {
    this._userService.updateStatus(user.email, user.isActive).subscribe(data => {
      console.log(data);
    });
  }
}
