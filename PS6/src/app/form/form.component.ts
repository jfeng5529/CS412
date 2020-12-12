import { Component, OnInit } from '@angular/core';
import { WxService } from '../services/wx.service';

interface WX {
  current: object;
  daily: object;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  currentWeather:any;

  constructor() { }

  ngOnInit(): void {
  }

  getWeather(): void { // call a service to get the current data
    this.wxService.getWeather().subscribe(
      (response: WX) => {
        console.log(`Response: ${response}`);
        this.currentWeather = response.current;
      }
    );

}
}