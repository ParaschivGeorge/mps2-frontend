import { Component, OnInit, Input } from '@angular/core';
import { ViewRequestHelperService } from 'src/app/services/view-request-helper.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { User } from 'src/app/models/user';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatBottomSheetRef } from '@angular/material';

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

  donorForm = new FormControl(null, [Validators.required, this.donorValidator.bind(this)]);
  quantityForm = new FormControl('0.5', [
    Validators.required,
    Validators.pattern('[0-1].[0-9]')
  ]);
  filteredDonors: Observable<User[]>;
  matcher = new MyErrorStateMatcher();

  constructor(
    private _viewRequestHelperService: ViewRequestHelperService,
    private bottomSheetRef: MatBottomSheetRef<DonorDataComponent>
  ) { }

  ngOnInit() {
    this.filteredDonors = this.donorForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  get users(): User[] {
    return this._viewRequestHelperService.users;
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.users.filter(user => user.lastName.toLowerCase().indexOf(filterValue) === 0);
  }

  donorValidator(control: FormControl): {[s: string]: boolean} {
    if (this.users.filter(user => user.email === control.value).length > 0) {return null; }
    return {'invalidDonor': true};
  }

  previewImage(event) {
    console.log(event);
  }

  onSubmit() {
    if (this.donorForm.valid && this.quantityForm.valid) {
      const donor: User = this.users.filter(user => user.email === this.donorForm.value)[0];
      this._viewRequestHelperService.requests[this._viewRequestHelperService.index].donors.push(
        {
          email: donor.email,
          firstname: donor.firstname,
          lastName: donor.lastName,
          quantity: this.quantityForm.value,
          bloodWork: '../../assets/blood_work.pdf'
        }
      );
      this.bottomSheetRef.dismiss();
    }
  }
}
