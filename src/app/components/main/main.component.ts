import { Component, OnInit } from '@angular/core';
import { weatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?: weatherData;
  ngOnInit(): void {
    this.weatherService.getWeatherData('washington').subscribe({
      next: (res) => {
        this.weatherData = res;
        console.log(res);
      },
    });
  }
}
