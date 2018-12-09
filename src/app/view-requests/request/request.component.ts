import { Component, OnInit, Input } from '@angular/core';
import { BloodRequest } from 'src/app/models/blood-request';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { DonorDataComponent } from './donor-data/donor-data.component';
import { ViewRequestHelperService } from 'src/app/services/view-request-helper.service';
import { Donor } from 'src/app/models/donor';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Input() request: BloodRequest;
  @Input() index: number;
  @Input() viewAs: string;

  statuses = ['Donation', 'Processing', 'Testing', 'Distribution'];

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _viewRequestHelperService: ViewRequestHelperService
    ) { }

  ngOnInit() {
  }

  donate() {
    console.log('nu e backend ba saracilor!');
  }

  update() {
    console.log('nu e backend ba saracilor!');
  }

  addDonation() {
    this._viewRequestHelperService.index = this.index;
    this._bottomSheet.open(DonorDataComponent);
  }

  deleteDonation(donor: Donor) {
    // this.request.donors = this.request.donors.filter(donor1 => donor1 !== donor);
  }
}
