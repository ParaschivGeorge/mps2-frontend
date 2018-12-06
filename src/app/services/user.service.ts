import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    let queryParam = new HttpParams().set('email', email);
    queryParam = queryParam.append('password', password);

    return this._http.request('post', environment.apiUrl + '/login', {params : queryParam});
  }

  register(email: string, password: string, passwordConfirm: string, role: string,
    name: string, surname: string, bloodType: string, rh: string, hospitalId: number,
    transfusionCenterId: number): Observable<any> {
    let queryParam = new HttpParams().set('email', email);
    queryParam = queryParam.append('password', password);
    queryParam = queryParam.append('passwordConfirm', passwordConfirm);
    queryParam = queryParam.append('role', role);
    queryParam = queryParam.append('name', name);
    queryParam = queryParam.append('surname', surname);

    if (bloodType) {
      queryParam = queryParam.append('bloodType', bloodType);
    }
    if (rh) {
      queryParam = queryParam.append('rh', rh);
    }
    if (hospitalId) {
      queryParam = queryParam.append('hospitalId', hospitalId.toString());
    }
    if (transfusionCenterId) {
      queryParam = queryParam.append('transfusionCenterId', transfusionCenterId.toString());
    }

    return this._http.request('post', environment.apiUrl + '/register`', {params : queryParam});
  }
}
