import { Component, OnInit } from '@angular/core';
import { WeatherServicesService} from '../services/weather-services.service';

interface WX {
  weather: object;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  currentWeather:any;
  zipCode: null;

  constructor(private weatherService: WeatherServicesService) { }

  ngOnInit(): void {
  }

  getWeatherByZipCode(): void { // call a service to get the current data
    // this.weatherService.getWeather(this.zipCode).subscribe(
    //   (response: WX) => {
    //     console.log(`Response: ${response}`);
    //     this.currentWeather = response.weather;
    //   }
    // );
    this.currentWeather = ["yes", "no"];
}
}