import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }
  httpClient = inject(HttpClient);

  private apiKey = '5afdea9548msh175354dcd408bd6p1c6425jsnc1a220ec5bc3';
  private apiUrl = 'https://the-weather-api.p.rapidapi.com/api/weather';
  
  searchWeather(city:string){
    const headers = new HttpHeaders()
    .set("x-rapidapi-key",this.apiKey)
    .set("x-rapidapi-host","the-weather-api.p.rapidapi.com'")
    const option={headers};
    return this.httpClient.get(`${this.apiUrl}/${city}`,option)
  }
}
