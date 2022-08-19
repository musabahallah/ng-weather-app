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

  API_KEY: string = 'ef843dd7e1561a59e0ed984801612c11';

  getData() {}

  getWeatherData(cityName: string) {
    return this.http.get<weatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.API_KEY}`
    );
  }
}
