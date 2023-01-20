import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) {}

  getDataFromApi() {
    return this.http.get('https://quaint-tan-bull.cyclic.app/api/movies');
  }
  getImages() {
    return this.http.get<any[]>('https://quaint-tan-bull.cyclic.app/api/movies');
  }

  //filtre et tri
  getGames() {
    // Récupération des données de l'API
    this.http.get<Game[]>('https://quaint-tan-bull.cyclic.app/api/movies').subscribe(data => {
      this.games = data;
    });
  }

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

  sortByAvis() {
    this.games.sort((a, b) => (a.avis > b.avis) ? 1 : -1);
  }

  sortByAvisReverse() {
    this.games.sort((a, b) => (a.avis < b.avis) ? 1 : -1);
  }

  filterByYear(year: string) {
    return this.games.filter(game => game.year === year);
  }

  filterByStudio(studio: string) {
    return this.games.filter(game => game.studio === studio);
  }

  filterByAvis(avis: string) {
    return this.games.filter(game => game.avis === avis);
  }

  filterByType(type: string) {
    return this.games.filter(game => game.type === type);
  }

  filterBySupport(support: string) {
    return this.games.filter(game => game.support === support);
  }
}