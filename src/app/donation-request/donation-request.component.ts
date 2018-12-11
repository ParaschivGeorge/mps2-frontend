import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { BloodRequestService } from '../services/blood-request.service';
import * as jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { TransfusionCenter } from '../models/transfusion-center';
import { TransfusionCenterService } from '../services/transfusion-center.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-donation-request',
  templateUrl: './donation-request.component.html',
  styleUrls: ['./donation-request.component.css']
})
export class DonationRequestComponent implements OnInit {

  constructor(
    private _bloodRequestService: BloodRequestService,
    private _transfusionCenterService: TransfusionCenterService,
    private _router: Router) { }

  donationForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  bloodGroups = ['0', 'A', 'B', 'AB'];
  rhs = ['positive', 'negative'];
  transfusionCenters: TransfusionCenter[] = [];

  ngOnInit() {
    this._transfusionCenterService.getTransfusionCenters().subscribe(transfusionCenters => {
      this.transfusionCenters = transfusionCenters;
      this.donationForm = new FormGroup({
        'patient-name': new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ]),
        'blood-group': new FormControl('0', []),
        'rh': new FormControl('positive', []),
        'quantity': new FormControl('5', [
          Validators.required,
          Validators.pattern('[0-9]*.[0-9]*'),
          this.quantityValidator
        ]),
        'transfusionCenter': new FormControl(transfusionCenters[0]),
      });
    });
  }

  quantityValidator(control: FormControl): {[s: string]: boolean} {
    if (!isNaN(control.value) && (parseFloat(control.value) > 0) && (parseFloat(control.value) < 100)) {return null; }
    return {'wrongQuantity': true};
  }

  onSubmit() {
    console.log(this.donationForm.get('transfusionCenter').value);
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];
    if (this.donationForm.valid) {
      this._bloodRequestService.createRequest(
        this.donationForm.get('patient-name').value,
        this.donationForm.get('quantity').value,
        user.id,
        this.donationForm.get('blood-group').value,
        this.donationForm.get('rh').value,
        this.donationForm.get('transfusionCenter').value.idCenter).subscribe(data => {
          console.log(data);
          this._router.navigate(['requests']);
        });
    }
  }
}
