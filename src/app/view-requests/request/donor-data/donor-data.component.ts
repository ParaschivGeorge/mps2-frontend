import { Component, OnInit, Input } from '@angular/core';
import { ViewRequestHelperService } from 'src/app/services/view-request-helper.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { User } from 'src/app/models/user';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatBottomSheetRef } from '@angular/material';
import { formatDate } from '@angular/common';
import { DonationService } from 'src/app/services/donation.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-donor-data',
  templateUrl: './donor-data.component.html',
  styleUrls: ['./donor-data.component.css']
})
export class DonorDataComponent implements OnInit {

  date = new Date();
  donorForm = new FormControl(null, [Validators.required, this.donorValidator.bind(this)]);
  quantityForm = new FormControl('0.4', [
    Validators.required,
    Validators.pattern('[0-1].[0-9]')
  ]);
  filteredDonors: Observable<User[]>;
  matcher = new MyErrorStateMatcher();

  constructor(
    private _viewRequestHelperService: ViewRequestHelperService,
    private bottomSheetRef: MatBottomSheetRef<DonorDataComponent>,
    private _donationService: DonationService
  ) { }

  ngOnInit() {
    this.filteredDonors = this.donorForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  get donors(): User[] {
    return this._viewRequestHelperService.donors;
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.donors.filter(user => user.surname.toLowerCase().indexOf(filterValue) === 0);
  }

  donorValidator(control: FormControl): {[s: string]: boolean} {
    if (this.donors.filter(user => user.email === control.value).length > 0) {return null; }
    return {'invalidDonor': true};
  }

  previewImage(event) {
    console.log(event);
  }

  onSubmit() {
    if (this.donorForm.valid && this.quantityForm.valid) {
      this._donationService.createDonation(
        this.quantityForm.value,
        formatDate(this.date, 'dd/MM/yyyy', 'en-US'),
        this.donorForm.value.id,
        this._viewRequestHelperService.requests[this._viewRequestHelperService.index].id,
        'aaa'
        ).subscribe(data => {
        console.log(data);
        this.bottomSheetRef.dismiss();
        window.location.reload();
      });
    }
  }
}
