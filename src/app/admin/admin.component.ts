import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = [{
    id: 1,
    email: 'vasile.emil@email.com',
    name: 'Emil',
    surname: 'Vasile',
    role: 'donor'
  }, {
    id: 2,
    email: 'mecleu.jica@email.com',
    name: 'Jica',
    surname: 'Mecleu',
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
