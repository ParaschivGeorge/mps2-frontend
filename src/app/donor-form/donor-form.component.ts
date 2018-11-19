import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-donor-form',
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.css']
})
export class DonorFormComponent implements OnInit {

  questions = [
    'Do you have a: flu sore throat fever infection?',
    'In the last 3 days have you taken medication (including Aspirin), other than birth control pills or vitamins?',
    'In the last month have you taken any of the following medications: Accutane,Epuris,Clarus,Isotretinoin Toctino,' +
      ' Alitretinoin Proscar,Propecia,Finasteride?',
    'In the last 3 months have you had a vaccination?',
    'In the last 12 months have you had a rabies shot or a shot for exposure to hepatitis B?',
    'Do you have diabetes?',
    'In the last 6 months have you been pregnant?',
    'Have you ever had malaria?',
    'Have you ever had a positive test for the HIV/AIDS virus?',
    'Have you ever had cancer?',
    'Have you ever had a coma or stroke?',
    'Have you ever had problems with your heart or lungs?',
    'In the last 12 months have you used cocaine?',
    'In the last 12 months have you had sex with anyone who has HIV/AIDS or has tested positive for the HIV/AIDS virus?',
  ];

  donorForm: FormGroup;

  constructor() { }

  ngOnInit() {
    const questionsFormArray = new FormArray([]);
    this.questions.forEach(question => {
      questionsFormArray.push(new FormControl(false));
    });
    this.donorForm = new FormGroup({'questions': questionsFormArray}, this.donorFormValidator.bind(this));
  }

  donorFormValidator(c: FormGroup) {
    let valid = true;
    (<FormArray>(c.get('questions'))).controls.forEach(control => {
      if (control.value) {
        valid = false;
        console.log('invalid');
      }
    });
    if (valid) {return null; }
    return { invalid: true };
  }

  onSubmit() {
    if (this.donorForm.valid) {
      console.log('DONATE!');
    }
  }

}
