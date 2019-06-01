import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
// export means this can be used somewhere else.
export class CitySearchComponent implements OnInit {
  // Search is form control
  search = new FormControl() // auto import

  constructor() { }

  ngOnInit() {
  }

}
