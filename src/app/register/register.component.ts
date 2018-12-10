import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../services/user.service';
import { HospitalService } from '../services/hospital.service';
import { TransfusionCenterService } from '../services/transfusion-center.service';
import { TransfusionCenter } from '../models/transfusion-center';
import { Hospital } from '../models/hospital';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  roles = ['donor', 'doctor', 'employee'];
  rhs = ['positive', 'negative'];
  bloodTypes = ['0', 'A', 'B', 'AB'];
  hospitals: Hospital[] = [];
  transfusionCenters: TransfusionCenter[] = [];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  firstNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*')
  ]);

  lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*')
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  ]);

  passwordConfirmFormControl = new FormControl('', [
    Validators.required,
    this.passwordConfirmValidator.bind(this)
  ]);

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _hospitalService: HospitalService,
    private _transfusionCenterService: TransfusionCenterService
  ) { }

  ngOnInit() {
    this._hospitalService.getHospitals().subscribe(hospitals => {
      this.hospitals = hospitals;
      this._transfusionCenterService.getTransfusionCenters().subscribe(transfusionCenters => {
        this.transfusionCenters = transfusionCenters;
        this.registerForm = new FormGroup({
          'email': this.emailFormControl,
          'first-name': this.firstNameFormControl,
          'last-name': this.lastNameFormControl,
          'password': this.passwordFormControl,
          'confirm-password': this.passwordConfirmFormControl,
          'role': new FormControl('donor'),
          'rh': new FormControl('positive'),
          'bloodType': new FormControl('0'),
          'transfusionCenter': new FormControl(transfusionCenters[0]),
          'hospital': new FormControl(hospitals[0])
        });
      });
    });
  }

  passwordConfirmValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === this.passwordFormControl.value) {return null; }
    return {'passwordsNotMatching': true};
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this._userService.register(
        this.registerForm.get('email').value,
        this.registerForm.get('password').value,
        this.registerForm.get('confirm-password').value,
        this.registerForm.get('role').value,
        this.registerForm.get('first-name').value,
        this.registerForm.get('last-name').value,
        this.registerForm.get('bloodType').value,
        this.registerForm.get('rh').value,
        this.registerForm.get('hospital').value.id_hospital,
        this.registerForm.get('transfusionCenter').value.id_center
      ).subscribe(data => {
        console.log(data);
        this._router.navigate(['login']);
      });
    }
  }
}
