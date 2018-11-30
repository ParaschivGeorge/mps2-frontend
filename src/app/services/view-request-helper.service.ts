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
    email: 'vasile.emil@email.com',
    firstname: 'Emil',
    lastName: 'Vasile',
    role: 'donor'
  }, {
    email: 'mecleu.jica@email.com',
    firstname: 'Jica',
    lastName: 'Mecleu',
    role: 'donor'
  }];
  requests: BloodRequest[] = [{
    id: 1,
    status: 'Donation', // 'Processing', 'Testing', 'Distribution'
    bloodGroup: 'A',
    rh: 'positive', // 'negative'
    quantity: 2,
    totalQuantity: 10,
    name: 'Vasile Emil',
    center: 'Blood Donation Center Bucharest',
    donors: [
      {
        email: 'dorel.ninita@email.com',
        firstname: 'Dorel',
        lastName: 'Ninita',
        quantity: 0.5,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita1@email.com',
        firstname: 'Dorel1',
        lastName: 'Ninita1',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita2@email.com',
        firstname: 'Dorel2',
        lastName: 'Ninita2',
        quantity: 0.5,
        bloodWork: '../../assets/blood_work.pdf'
      }
    ]
  }, {
    id: 1,
    status: 'Processing',
    bloodGroup: 'B',
    rh: 'negative',
    quantity: 8,
    totalQuantity: 8,
    name: 'Megleu Jiji',
    center: 'Blood Donation Center Bucharest',
    donors: [
      {
        email: 'dorel.ninita@email.com',
        firstname: 'Dorel',
        lastName: 'Ninita',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita1@email.com',
        firstname: 'Dorel1',
        lastName: 'Ninita1',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita2@email.com',
        firstname: 'Dorel2',
        lastName: 'Ninita2',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita3@email.com',
        firstname: 'Dorel3',
        lastName: 'Ninita3',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita4@email.com',
        firstname: 'Dorel4',
        lastName: 'Ninita4',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita5@email.com',
        firstname: 'Dorel5',
        lastName: 'Ninita5',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita6@email.com',
        firstname: 'Dorel6',
        lastName: 'Ninita6',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      },
      {
        email: 'dorel.ninita7@email.com',
        firstname: 'Dorel7',
        lastName: 'Ninita7',
        quantity: 1,
        bloodWork: '../../assets/blood_work.pdf'
      }
    ]
  }];

  constructor() { }
}
