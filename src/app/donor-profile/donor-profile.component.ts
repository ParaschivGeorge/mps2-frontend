import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {

  pdfs = ['../../assets/blood_work.pdf', '../../assets/blood_work1.pdf'];

  constructor() { }

  ngOnInit() {
  }

}
