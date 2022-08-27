import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { OpenWeatherData } from 'src/app/models/open-weather-data.model';

import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  faTemperatureHigh = faTemperatureHigh;
  faTemperatureLow = faTemperatureLow;
  faDroplet = faDroplet;
  faWind = faWind;
  faMagnifyingGlass = faMagnifyingGlass;

  cityName: string = 'Mecca';

  test = 15;

  openWeatherData?: OpenWeatherData;
  temp: number = 0;

  cityLat: number = 0;
  cityLon: number = 0;

  ngOnInit(): void {
    this.getOpenWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getOpenWeatherData(this.cityName);
    this.cityName = '';
  }

  getOpenWeatherData(cityName: string) {
    this.weatherService.getLocation(cityName).subscribe({
      next: (res) => {
        this.openWeatherData = res;
        this.temp = res.main.temp;
      },
    });
  }
}
