import { Component, OnInit, Input } from '@angular/core';
import { BloodRequest } from 'src/app/models/blood-request';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Input() request: BloodRequest;
  @Input() viewAs: string;

  constructor() { }

  ngOnInit() {
  }

  donate() {
    console.log('nu e backend ba saracilor!');
  }
}
