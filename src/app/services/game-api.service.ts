import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameAPIService {

  constructor(private http: HttpClient) {}

  getDataFromApi() {
    return this.http.get('https://quaint-tan-bull.cyclic.app/api/movies');
  }
  
}
