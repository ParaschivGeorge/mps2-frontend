import { Injectable } from '@angular/core';
import { BloodRequest } from '../models/blood-request';
import { User } from '../models/user';
import { Donor } from '../models/donor';

@Injectable({
  providedIn: 'root'
})
export class ViewRequestHelperService {

  viewAs = 'donor'; // 'donor', doctor', 'employee'
  index = 0;
  requests: BloodRequest[] = null;
  donationRegistered = false;
  donors: Donor[];

  constructor() { }
}
