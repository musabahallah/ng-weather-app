import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OpenWeatherData } from '../models/open-weather-data.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getLocation(cityName: string): Observable<OpenWeatherData> {
    return this.http.get<OpenWeatherData>(environment.BASE_URL, {
      params: new HttpParams()
        .set('q', cityName)
        .set('appid', environment.API_KEY)
        .set('units', 'metric'),
    });
  }
}
