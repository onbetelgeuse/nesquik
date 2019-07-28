import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapApiService {
  

  private apiUrl = 'http://openweathermap.org';
  private version = '2.5';
  private apiKey = '621b14951348765f51f5260a88da7beb';

  private baseUrl: string;

  constructor(private http: HttpClient) {
    
    this.baseUrl = `${this.apiUrl}/data/${this.version}`;
   }

  find(query: string):Observable<any> {

    let params = new HttpParams()
      .set('type', 'like')
      .set('sort', 'population')
      .set('ctn', '10')
      .set('appid', 'b6907d289e10d714a6e88b30761fae22');

    return this.http.get(`${this.baseUrl}/find?q=${query}`, { params: params });
  }
}
