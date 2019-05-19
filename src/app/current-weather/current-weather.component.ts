import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather/weather.service';

@Component({   // 3 files are connected here
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit { 
  current: ICurrentWeather // current variable: city, country, image..
  constructor(private weatherService: WeatherService) { 
    // sample below:
    // this.current = { // in memory, data got created as written below
    //   city: 'Bethesda', // dummy value to see how UI looks like.
    //   country: 'US',
    //   date: new Date(),
    //   image: '',
    //   temperature: 72,
    //   description: 'Sunny'
    // }
  }
  ngOnInit() {
    // want to get data more than one day by using ".subscribe"
    this.weatherService.getCurrentWeather('Bethesda', 'US').subscribe(data => this.current = data);
  }

}
