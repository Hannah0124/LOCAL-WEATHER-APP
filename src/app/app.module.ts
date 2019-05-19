import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component'; // added automatically
import { WeatherService } from './weather/weather.service'; // added automatically
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // added
  ],
  providers: [WeatherService], // provider is a service.
  bootstrap: [AppComponent]  //bootstrap style sheet concept. bootstrap starts with app component
})
export class AppModule { }
