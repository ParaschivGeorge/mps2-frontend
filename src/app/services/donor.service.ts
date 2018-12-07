import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Donor } from '../models/donor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor(private _http: HttpClient) { }

  getDonors(bloodType: string, rh: string): Observable<Donor[]> {
    let queryParam = new HttpParams();
    if (bloodType) {
      queryParam = queryParam.append('bloodType', bloodType);
    }
    if (rh) {
      queryParam = queryParam.append('rh', rh);
    }
    return this._http.get<Donor[]>(environment.apiUrl + '/donor', {params : queryParam});
    return  of([{id: 1, name: 'Floreasca Hospital', doctors: []}, {id: 2, name: 'Colțea Hospital', doctors: []}]);
  }
}
