import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransfusionCenter } from '../models/transfusion-center';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransfusionCenterService {

  constructor(private _http: HttpClient) { }

  getTransfusionCenters(): Observable<TransfusionCenter[]> {
    return this._http.get<TransfusionCenter[]>(environment.apiUrl + '/transfusionCenter');
    // return  of([{id: 1, name: 'Blood donation center Bucharest', employees: [], requests: []}]);
  }
}
