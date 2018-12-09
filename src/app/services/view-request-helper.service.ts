import { Injectable } from '@angular/core';
import { BloodRequest } from '../models/blood-request';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ViewRequestHelperService {

  viewAs = 'employee'; // 'donor', doctor', 'employee'
  index = 0;
  users: User[] = [{
    id: 1,
    email: 'vasile.emil@email.com',
    name: 'Emil',
    surname: 'Vasile',
    role: 'donor'
  }, {
    id: 1,
    email: 'mecleu.jica@email.com',
    name: 'Jica',
    surname: 'Mecleu',
    role: 'donor'
  }];
  requests: BloodRequest[] = [{
    id: 1,
    status: 'Donation', // 'Processing', 'Testing', 'Distribution'
    bloodType: 'A',
    rh: 'positive', // 'negative'
    quantity: 10,
    receivingPerson: 'Vasile Emil',
    center: {id_center: 1, name: 'Blood Donation Center Bucharest', employees: [], requests: []},
    donations: [],
    doctor: null
  },
  {
    id: 2,
    status: 'Processing', // 'Donation', 'Testing', 'Distribution'
    bloodType: 'A',
    rh: 'positive', // 'negative'
    quantity: 10,
    receivingPerson: 'Vasile Emil',
    center: {id_center: 1, name: 'Blood Donation Center Bucharest', employees: [], requests: []},
    donations: [],
    doctor: null
  }];

  constructor() { }
}
