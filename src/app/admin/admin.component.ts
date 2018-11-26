import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = [{
    email: 'vasile.emil@email.com',
    firstname: 'Emil',
    lastName: 'Vasile',
    role: 'donor'
  }, {
    email: 'mecleu.jica@email.com',
    firstname: 'Jica',
    lastName: 'Mecleu',
    role: 'doctor'
  }];

  roles = ['donor', 'doctor', 'employee'];

  constructor() { }

  ngOnInit() {
  }

  updateRoles() {
    console.log(this.users);
  }

}
