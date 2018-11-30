import { Component, OnInit } from '@angular/core';
import { BloodRequest } from '../models/blood-request';
import { ViewRequestHelperService } from '../services/view-request-helper.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  constructor(private _viewRequestHelperService: ViewRequestHelperService) { }

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

  get viewAs(): string {
    return this._viewRequestHelperService.viewAs;
  }

  get requests(): BloodRequest[] {
    return  this._viewRequestHelperService.requests;
  }
}
