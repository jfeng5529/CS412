import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {weatherConfig} from "../config";

@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {

  constructor(private http: HttpClient) {
  }

  getWeather(zipCode: string): Observable<any> {
    return this.http.get(weatherConfig.url + zipCode);
  }

}
