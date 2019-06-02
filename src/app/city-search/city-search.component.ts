import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
// export means this can be used somewhere else.
export class CitySearchComponent implements OnInit {
  // Output&EventEmitter: auto import  & searchEvent is just a name
  @Output() searchEvent = new EventEmitter<string>();



  // Search is form control
  search = new FormControl('', [Validators.minLength(3)]) // Form Control & Validators: auto import

  constructor(private weatherService: WeatherService) { } // auto import

  ngOnInit() {
    // valueChanges: listening on the changes, 
    // subscribe: continously listening(publish subscribe model)
    this.search.valueChanges
    .pipe(debounceTime(1000)).subscribe((searchValue : string) => {
      if (!this.search.invalid) {
        this.searchEvent.emit(searchValue)
      }
    })
  }

  getErrorMessage() {
    return this.search.hasError('minlength') ? 'Type three or more characters in the search box.' : '';
  }

}
