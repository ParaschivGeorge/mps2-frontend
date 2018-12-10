import { Component, OnInit, Input } from '@angular/core';
import { BloodRequest } from 'src/app/models/blood-request';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { DonorDataComponent } from './donor-data/donor-data.component';
import { ViewRequestHelperService } from 'src/app/services/view-request-helper.service';
import { Donor } from 'src/app/models/donor';
import { Router } from '@angular/router';
import { BloodRequestService } from 'src/app/services/blood-request.service';
import { Donation } from 'src/app/models/donation';
import { DonationService } from 'src/app/services/donation.service';

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
    private _viewRequestHelperService: ViewRequestHelperService,
    private _router: Router,
    private _bloodRequestService: BloodRequestService,
    private _donationService: DonationService
    ) { }

  ngOnInit() {
  }

  donate() {
    this._viewRequestHelperService.donationRegistered = true;
  }

  get donationRegistered() {
    return this._viewRequestHelperService.donationRegistered;
  }

  update() {
    this._bloodRequestService.updateRequest(
      this.request.id,
      this.request.status,
      this.request.receivingPerson,
      this.request.quantity,
      this.request.doctor.id,
      this.request.bloodType,
      this.request.rh,
      this.request.center.id_center
      ).subscribe(data => {
        console.log(data);
        window.location.reload();
      });
  }

  addDonation() {
    this._viewRequestHelperService.index = this.index;
    this._bottomSheet.open(DonorDataComponent);
  }

  deleteDonation(donation: Donation) {
    this._donationService.deleteDonation(donation.id).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }

  getSumQuantity() {
    let sumQuantity = 0;
    this.request.donations.forEach(donation => {
      sumQuantity += donation.quantity;
    });

    return sumQuantity;
  }

  remove() {
    this._bloodRequestService.deleteRequest(this.request.id).subscribe(data => {
      console.log(data);
      window.location.reload();
    });
  }
}
