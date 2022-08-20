import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherDataApi } from '../models/weather-data-api.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  // getWeatherData(cityName: string) {
  //   return this.http.get<weatherData>(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${environment.API_KEY}`
  //   );
  // }

  getWeatherData(cityName: string): Observable<WeatherDataApi> {
    return this.http.get<WeatherDataApi>(environment.BASE_URL, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHost, environment.XRapidAPIHostValue)
        .set(environment.XRapidAPIKey, environment.XRapidAPIKeyValue),

      params: new HttpParams()
        .set('location', cityName)
        .set('u', 'c')
        .set('format', 'json'),
    });
  }
}
