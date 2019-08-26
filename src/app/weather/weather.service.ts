import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //automatically added
import { environment } from 'src/environments/environment';
import { ICurrentWeather } from '../icurrent-weather';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IWeatherService {
  // Return needs to be <Observable> - Observable: auto import
  getCurrentWeather(search: string | number, country?: string): Observable<ICurrentWeather> 

}

// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
interface ICurrentWeatherData {
  weather: [{  // only want description and weather from an array
    description: string,
    icon: string
  }],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  constructor(private httpClient: HttpClient) 
  { }

  // create a function:  name of my function(2 parameters)
  // this function returns <ICurrentWeatherData> back
  getCurrentWeather(search: string | number, country?: string) { 
    let uriParams = ''
    // if type is string, it is city. Otherwise(number), it is zipe code.
    if (typeof search === 'string') {
      uriParams = `q=${search}`
    } else {
      uriParams = `zip=${search}`
    }

    if (country) {
      uriParams = `${uriParams},${country}`
    }
   
   
    // go get me the data (<-> post = submitting data)
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${environment.appId}`
    ).pipe(map(data => this.transformToICurrentWeather(data)))  //pipe method
  }

  // create another function 
  private transformToICurrentWeather(data: ICurrentWeatherData) : ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,  // this data is milisec (that's why 1000)
      // only want the first weather (current weather)
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: data.main.temp,
      description: data.weather[0].description
    }
  }
}
