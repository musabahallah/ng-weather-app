import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getData() {}

  getWeatherData(cityName: string) {
    return this.http.get<weatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${environment.API_KEY}`
    );
  }
}
