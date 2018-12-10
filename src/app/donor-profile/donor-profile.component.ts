import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Donor } from '../models/donor';
import * as jwt_decode from 'jwt-decode';
import { DonorService } from '../services/donor.service';
import { Donation } from '../models/donation';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {

  pdf = '../../assets/blood_work.pdf';
  donor: Donor = null;
  donations: Donation[] = null;
  date = new Date();
  constructor(private _donorService: DonorService, private _donationService: DonationService) { }

  ngOnInit() {
    const user: User = jwt_decode(localStorage.getItem('token'))['user'];
    this._donorService.getDonor(user.id).subscribe(donor => {
      console.log(donor);
      this.donor = donor;
      this._donationService.getDonations(donor.id, null).subscribe(donations => {
        this.donations = donations.sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        console.log(this.donations);
      });
    });
  }

  getDonationMessage() {
    if (localStorage.getItem('donation') === null) {
      return 'Take the donation test!';
    } else if (localStorage.getItem('donation') === 'true') {
      return 'You can donate!';
    } else {
      return 'You can\'t donate';
    }
  }

  getNextDonationDate() {
    if (this.donations === null) {
      return 'now';
    }
    console.log(this.donations[0].date);
    const date = new Date(this.donations[0].date);
    return date.setMonth(date.getMonth() + 6);
  }
}
