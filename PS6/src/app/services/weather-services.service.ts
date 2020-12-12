import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import data from '../config/config.json';

@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {

  constructor(private http: HttpClient) {
  }

  getWeather(zipCode: string): Observable<any> {
    return this.http.get(data.weatherURL + zipCode);
  }

}
