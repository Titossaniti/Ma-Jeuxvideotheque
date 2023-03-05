import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Game {
  name: string;
  year: string;
  image: string;
  type: string;
  mode: string;
  support: string;
  studio: string;
  gameplay: string;
  avis: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameAPIService {
  private games: Game[] = [];
  private baseUrl = window.location.origin;

  constructor(private http: HttpClient) {}

  getDataFromApi() {
    return this.http.get('https://quaint-tan-bull.cyclic.app/api/movies');
  }
  getImages() {
    return this.http.get<any[]>('https://quaint-tan-bull.cyclic.app/api/movies');
  }
  getDataForPage(gameName: string): Observable<any> {
    const url = `${this.baseUrl}?image=${gameName}`;
    return this.http.get<any[]>('https://quaint-tan-bull.cyclic.app/api/movies');
  }

//filtre et tri
  sortByName() {
    this.games.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
  sortByNameReverse() {
    this.games.sort((a, b) => (a.name < b.name) ? 1 : -1);
  }
  sortByYear() {
    this.games.sort((a, b) => (a.year > b.year) ? 1 : -1);
  }
  sortByYearReverse() {
    this.games.sort((a, b) => (a.year < b.year) ? 1 : -1);
  }
  filterByYear(year: string) {
    return this.games.filter(game => game.year === year);
  }
  filterByStudio(studio: string) {
    return this.games.filter(game => game.studio === studio);
  }
  filterBySupport(support: string) {
    return this.games.filter(game => game.support === support);
  }
}