import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hospital } from '../models/hospital';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private _http: HttpClient) { }

  getHospitals(): Observable<Hospital[]> {
    // return this._http.get<Hospital[]>(environment.apiUrl + '/hospital');
    return  of([{id: 1, name: 'Floreasca Hospital', doctors: []}, {id: 2, name: 'Colțea Hospital', doctors: []}]);
  }
}
