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
  data: any;
  nbOfGame: any;
  currentPage = 1;
  itemsPerPage = 4;
  showSorting = false;
  showFilters = false;
  uniqueStudios:any;
  selectedStudios: string[] = [];
  uniqueYears:any;
  selectedYears: string[] = [];
  uniqueSupports:any;
  selectedSupports: string[] = [];

constructor(private gameService: GameAPIService) {}

  ngOnInit() {
    this.gameService.getDataFromApi().subscribe(data => {
      this.data = data;
      this.nbOfGame = this.data.length;

      this.uniqueStudios = Array.from(new Set(this.data.map((item:Item) => item.studio)));
      this.uniqueStudios.sort();

      this.uniqueYears = Array.from(new Set(this.data.map((item:Item) => item.year)));
      this.uniqueYears.sort();

      this.uniqueSupports = Array.from(new Set(this.data.map((item:Item) => item.support)));
      this.uniqueSupports.sort();
    });
  }
//Trier par année de sortie
  sortByYear(sortOrder: string) {
    if (sortOrder === 'asc') {
      this.data.sort((a:any, b:any) => a.year - b.year);
    } else {
      this.data.sort((a:any, b:any) => b.year - a.year);
    }
  }
//Trier par nom (A à Z et Z à A)
  sortByName(sortOrder: string) {
    if (sortOrder === 'asc') {
      this.data.sort((a:any, b:any) => (a.name > b.name) ? 1 : -1);
    } else {
      this.data.sort((a:any, b:any) => (a.name < b.name) ? 1 : -1);
    }
  }
// Fonction pour obtenir les éléments de la page courante, slice pour retirer les éléments non nécéssaires
get items(): Item[] {
  let filteredData = this.data;
  if (this.selectedStudios.length > 0) {
      filteredData = filteredData.filter((item:Item) => this.selectedStudios.includes(item.studio));
  } 
  if (this.selectedYears.length > 0) {
      filteredData = filteredData.filter((item:Item) => this.selectedYears.includes(item.year));
  } 
  if (this.selectedSupports.length > 0){
      filteredData = filteredData.filter((item:Item) => this.selectedSupports.includes(item.support));
  }
  const start = (this.currentPage - 1) * this.itemsPerPage;
  return filteredData.slice(start, start + this.itemsPerPage);
}
//Filtrer : fonction  pour mettre à jour le tableau des studios sélectionnés lorsqu'une case est cochée et décochée
updateSelectedStudios(studio: string, checkedInput: HTMLInputElement) {
  if (checkedInput.checked) {
      this.selectedStudios.push(studio);
  } else {
      this.selectedStudios = this.selectedStudios.filter(s => s !== studio);
  }
  this.currentPage = 1;
}

updateSelectedYears(year: string, checkedInput: HTMLInputElement) {
  if (checkedInput.checked) {
      this.selectedYears.push(year);
  } else {
      this.selectedYears = this.selectedYears.filter(s => s !== year);
  }
  this.currentPage = 1;
}

updateSelectedSupports(support: string, checkedInput: HTMLInputElement) {
  if (checkedInput.checked) {
      this.selectedSupports.push(support);
  } else {
      this.selectedSupports = this.selectedSupports.filter(s => s !== support);
  }
  this.currentPage = 1;
}
//Réinitialiser les filtres
resetFilters() {
  this.selectedStudios = [];
  this.selectedYears = [];
  this.selectedSupports = [];
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