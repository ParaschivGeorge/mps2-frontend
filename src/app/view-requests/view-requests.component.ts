import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../models/blood-request';
import { ViewRequestHelperService } from '../services/view-request-helper.service';
import { User } from '../models/user';
import * as jwt_decode from 'jwt-decode';
import { DonorService } from '../services/donor.service';
import { BloodRequestService } from '../services/blood-request.service';
import { EmployeeService } from '../services/employee.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  user: User;

  constructor(
    private _viewRequestHelperService: ViewRequestHelperService,
    private _donorService: DonorService,
    private _employeeService: EmployeeService,
    private _doctorService: DoctorService,
    private _bloodRequestService: BloodRequestService,
  ) { }


  ngOnInit() {
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];
    this._viewRequestHelperService.viewAs = user.role.toLowerCase();
    if (user.role.toLowerCase() === 'donor') {
      this._donorService.getDonor(user.id).subscribe(donor => {
        this._bloodRequestService.getRequests(null, donor.bloodType, donor.rh, null).subscribe(
          requests => {
            this._viewRequestHelperService.requests = requests;
            console.log(requests);
          }
        );
      });
    } else if (user.role.toLowerCase() === 'doctor') {
      this._doctorService.getDoctor(user.id).subscribe(doctor => {
        this._bloodRequestService.getRequests(doctor.id, null, null, null).subscribe(
          requests => {
            this._viewRequestHelperService.requests = requests;
            console.log(requests);
          }
        );
      });
    } else if (user.role.toLowerCase() === 'employee') {
      this._employeeService.getEmployee(user.id).subscribe(employee => {
        this._bloodRequestService.getRequests(null, null, null, employee.transfusionCenter.idCenter).subscribe(
          requests => {
            this._viewRequestHelperService.requests = requests;
            console.log(requests);
          }
        );
      });
      this._donorService.getDonors(null, null).subscribe(donors => {
        this._viewRequestHelperService.donors = donors;
        console.log(donors);
      });
    }
  }

  getHeader() {
    if (this.viewAs === 'doctor') {
      return 'Your blood requests:';
    }
    if (this.viewAs === 'employee') {
      return 'Blood requests in your center:';
    }
    if (this.viewAs === 'donor') {
      return 'Donate for:';
    }
  }

  get viewAs(): string {
    return this._viewRequestHelperService.viewAs;
  }

  get requests(): BloodRequest[] {
    return  this._viewRequestHelperService.requests;
  }

  get donationRegistered() {
    return this._viewRequestHelperService.donationRegistered;
  }
}
