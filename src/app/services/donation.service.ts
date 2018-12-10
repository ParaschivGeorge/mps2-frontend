import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private _http: HttpClient) { }

  createDonation(quantity: number, date: string, donorId: number, requestId: number, bloodTest: any): Observable<any> {

    let queryParam = new HttpParams().set('quantity', quantity.toString());
    queryParam = queryParam.append('date', date);
    queryParam = queryParam.append('donorId', donorId.toString());
    queryParam = queryParam.append('quantity', quantity.toString());
    queryParam = queryParam.append('requestId', requestId.toString());

    return this._http.request('post', environment.apiUrl + '/donation', {params : queryParam, body: bloodTest});
  }

  updateDonation(donationId: number, quantity: number, date: string, donorId: number, requestId: number, bloodTest: File): Observable<any> {

    let queryParam = new HttpParams().set('quantity', quantity.toString());
    queryParam = queryParam.append('date', date);
    queryParam = queryParam.append('donorId', donorId.toString());
    queryParam = queryParam.append('quantity', quantity.toString());
    queryParam = queryParam.append('requestId', requestId.toString());

    return this._http.request('put', environment.apiUrl + '/donation/' + donationId, {params : queryParam, body: bloodTest});
  }

  getDonations(donorId: number, requestId: number): Observable<Donation[]> {
    let queryParam = new HttpParams();
    if (donorId) {
      queryParam = queryParam.append('donorId', donorId.toString());
    }
    if (requestId) {
      queryParam = queryParam.append('requestId', requestId.toString());
    }

    return this._http.get<Donation[]>(environment.apiUrl + '/donation', {params : queryParam});
  }

  getDonation(donationId: number): Observable<Donation> {
    return this._http.get<Donation>(environment.apiUrl + '/donation/' + donationId);
  }

  deleteDonation(donationId: number): Observable<any> {
    return this._http.delete<any>(environment.apiUrl + '/donation/' + donationId);
  }
}
