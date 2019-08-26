import { IWeatherService } from './weather.service';
import { ICurrentWeather } from '../icurrent-weather';
import { of } from 'rxjs';

// Auto import: IWeahterService & ICurrentWeather
export class WeatherServiceFake implements IWeatherService {
  // We are supposed to return <ICurrentWeather>
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle'
  }

  public getCurrentWeather(search: string | number, country?: string) {
    // Not calling API at this time.
    // of: observable
    return of(this.fakeWeather);
  }
}