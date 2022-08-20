import { Component, OnInit } from '@angular/core';
import { WeatherDataApi } from 'src/app/models/weather-data-api.model';
import { WeatherService } from 'src/app/services/weather.service';

import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  faSun = faSun;
  faMoon = faMoon;
  faDroplet = faDroplet;
  faWind = faWind;

  cityName: string = 'Makkah';

  weatherData?: WeatherDataApi;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (res) => {
        this.weatherData = res;
        console.log(res);
      },
    });
  }
}
