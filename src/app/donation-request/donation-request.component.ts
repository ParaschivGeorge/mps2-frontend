import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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

  constructor() { }

  donationForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  bloodGroups = ['0', 'A', 'B', 'AB'];
  rhs = ['positive', 'negative'];

  ngOnInit() {
    this.donationForm = new FormGroup({
      'patient-name': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]),
      'blood-group': new FormControl('0', []),
      'rh': new FormControl('positive', []),
      'quantity': new FormControl('0', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        this.quantityValidator
      ]),
    });
  }

  quantityValidator(control: FormControl): {[s: string]: boolean} {
    if (!isNaN(control.value) && (parseInt(control.value) > 0)) {return null; }
    return {'passwordsNotMatching': true};
  }

  onSubmit() {
    if (this.donationForm.valid) {
      console.log(this.donationForm);
    }
  }
}
