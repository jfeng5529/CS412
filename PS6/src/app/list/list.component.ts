import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../data/Weather';
import { allWeather } from '../data/MockResponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() currentWeather: any;
  allWeather: Weather[] = allWeather
  Weather: Weather;
  selectedWeather: Weather;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedWeather(weather: Weather): void {
    this.selectedWeather = weather;
  }

}
