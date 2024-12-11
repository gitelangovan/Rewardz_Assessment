import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  private apiUrl = './assets/dataSet.json';

  constructor(private http: HttpClient) { }

  public fetchDatasets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
