import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../models/blood-request';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  viewAs = 'donor'; // 'doctor', 'employee'
  requests: BloodRequest[] = [{
    id: 1,
    status: 'Donation', // 'Processing', 'Testing', 'Distribution'
    bloodGroup: 'A',
    rh: 'positive', // 'negative'
    quantity: 2,
    totalQuantity: 10,
    name: 'Vasile Emil',
    center: 'Blood Donation Center Bucharest'
  }, {
    id: 1,
    status: 'Processing',
    bloodGroup: 'B',
    rh: 'negative',
    quantity: 8,
    totalQuantity: 8,
    name: 'Megleu Jiji',
    center: 'Blood Donation Center Bucharest'
  }];

  constructor() { }

  ngOnInit() {
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
}
