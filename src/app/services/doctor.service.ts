import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this._http.get<Doctor[]>(environment.apiUrl + '/doctor');
  }

  getDoctor(doctorId: number): Observable<Doctor> {
    return this._http.get<Doctor>(environment.apiUrl + '/doctor/' + doctorId);
  }
}
