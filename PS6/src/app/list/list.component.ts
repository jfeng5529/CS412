import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() currentWeather: any;
  isCached: any;
  constructor() { }

  ngOnInit(): void {
  }

}
