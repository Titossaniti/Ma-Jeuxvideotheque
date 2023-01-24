import { Component, OnInit } from '@angular/core';
import { GameAPIService } from 'src/app/services/game-api.service';

interface Item {
    name :string,
    year:string,
    image:string,
    type:string,
    mode:string,
    support:string,
    studio:string,
    gameplay:string,
    avis:string,
    desc:string
}

@Component({
  selector: 'app-game-list-body',
  templateUrl: './game-list-body.component.html',
  styleUrls: ['./game-list-body.component.scss']
})
export class GameListBodyComponent implements OnInit {
  data:any;
  nbOfGame: any;
  currentPage = 1;
  itemsPerPage = 4;
  availableStudios: any[]=[];

  constructor(private gameService: GameAPIService) {}

  ngOnInit() {
    this.gameService.getDataFromApi().subscribe(data => {
      this.data = data;
      this.nbOfGame = this.data.length;
      this.availableStudios = Array.from(new Set(this.data.map((item: Item) => item.studio)));
    });
  }

//Sorting API objects by year
  sortByYear(sortOrder: string) {
    if (sortOrder === 'asc') {
      this.data.sort((a:any, b:any) => a.year - b.year);
    } else {
      this.data.sort((a:any, b:any) => b.year - a.year);
    }
  }
//same but by name
  sortByName(sortOrder: string) {
    if (sortOrder === 'asc') {
      this.data.sort((a:any, b:any) => (a.name > b.name) ? 1 : -1);
    } else {
      this.data.sort((a:any, b:any) => (a.name < b.name) ? 1 : -1);
    }
  }

//filter

filterByStudio(studio: string) {
  this.data = this.data.filter((item: Item) => item.studio === studio);
  this.currentPage = 1;
}



  // Fonction pour obtenir les éléments de la page courante
  get items(): Item[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  // Fonction pour aller à la page suivante
  nextPage() {
    this.currentPage++;
  }

  // Fonction pour aller à la page précédente
  previousPage() {
    this.currentPage--;
  }
}
