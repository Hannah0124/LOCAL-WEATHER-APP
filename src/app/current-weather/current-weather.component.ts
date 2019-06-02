import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather/weather.service';

@Component({   // 3 files are connected here
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit { 
  @Input() current: ICurrentWeather // current variable: city, country, image..
  constructor() { 
  }
  ngOnInit() {
    // want to get data more than one day by using ".subscribe"
  }

}
