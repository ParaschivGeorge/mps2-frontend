import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BloodRequest } from '../models/blood-request';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {

  constructor(private _http: HttpClient) { }

  createRequest(receivingPerson: string, quantity: number, doctorId: number, bloodType: string,
    rh: string,  transfusionCenterId: number): Observable<any> {

    let queryParam = new HttpParams().set('transfusionCenterId', transfusionCenterId.toString());
    queryParam = queryParam.append('doctorId', doctorId.toString());
    queryParam = queryParam.append('receivingPerson', receivingPerson);
    queryParam = queryParam.append('quantity', quantity.toString());
    queryParam = queryParam.append('bloodType', bloodType);
    queryParam = queryParam.append('rh', rh);

    return this._http.request('post', environment.apiUrl + '/bloodRequest', {params : queryParam});
  }

  updateRequest(requestId: number, status: string, receivingPerson: string, quantity: number,
    doctorId: number, bloodType: string, rh: string,  transfusionCenterId: number): Observable<any> {

    let queryParam = new HttpParams().set('transfusionCenterId', transfusionCenterId.toString());
    queryParam = queryParam.append('doctorId', doctorId.toString());
    queryParam = queryParam.append('receivingPerson', receivingPerson);
    queryParam = queryParam.append('quantity', quantity.toString());
    queryParam = queryParam.append('bloodType', bloodType);
    queryParam = queryParam.append('rh', rh);
    queryParam = queryParam.append('status', status);

    return this._http.request('put', environment.apiUrl + '/bloodRequest/' + requestId, {params : queryParam});
  }

  getRequests(doctorId: number, bloodType: string, rh: string, transfusionCenterId: number): Observable<BloodRequest[]> {
    let queryParam = new HttpParams();
    if (bloodType) {
      queryParam = queryParam.append('bloodType', bloodType.toLowerCase());
    }
    if (rh) {
      queryParam = queryParam.append('rh', rh.toLowerCase() === 'positive' ? 'Positive' : 'Negative');
    }
    if (doctorId) {
      queryParam = queryParam.append('idDoctor', doctorId.toString());
    }
    if (transfusionCenterId) {
      queryParam = queryParam.append('idCenter', transfusionCenterId.toString());
    }

    return this._http.get<BloodRequest[]>(environment.apiUrl + '/bloodRequest', {params : queryParam});
  }

  getRequest(requestId: number): Observable<BloodRequest> {
    return this._http.get<BloodRequest>(environment.apiUrl + '/bloodRequest/' + requestId);
  }

  deleteRequest(requestId: number): Observable<any> {
    return this._http.delete<any>(environment.apiUrl + '/bloodRequest/' + requestId);
  }
}
