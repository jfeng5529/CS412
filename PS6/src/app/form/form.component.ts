import { Component, OnInit } from '@angular/core';
import { WeatherServicesService} from '../services/weather-services.service';


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
    console.log(this.zipCode);
    this.weatherService.getWeather(this.zipCode).subscribe(
      (data) => {
        

        let temp = JSON.stringify(data);
        let str= temp.substring(0, 12) + temp.substring(13, temp.lastIndexOf(",")-1)+temp.substring(temp.lastIndexOf(","));
        str = str.replace(/\\/g, "");
        let temp2 = JSON.parse(str);
        console.log(temp2);
        
        
        this.currentWeather = [temp2, temp2, temp2];
      }
    );
}
}