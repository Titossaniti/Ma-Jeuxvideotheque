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
  filterByStudio: any;
  uniqueStudios:any;
  showFilters = false;
  selectedStudios: string[] = [];

constructor(private gameService: GameAPIService) {}

  ngOnInit() {
    this.gameService.getDataFromApi().subscribe(data => {
      this.data = data;
      this.nbOfGame = this.data.length;
      this.uniqueStudios = Array.from(new Set(this.data.map((item:Item) => item.studio)));
      this.uniqueStudios.sort();
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
      filteredData = this.data.filter((item:Item) => this.selectedStudios.includes(item.studio));
  }
  const start = (this.currentPage - 1) * this.itemsPerPage;
  return filteredData.slice(start, start + this.itemsPerPage);
}


//filtrer
filterBySelectedStudio(studio: string) {
  this.filterByStudio = studio;
  this.currentPage = 1;
}

//fonction  pour mettre à jour le tableau des studios sélectionnés lorsqu'une case est cochée et décochée
updateSelectedStudios(studio: string, checkedInput: HTMLInputElement) {
  if (checkedInput.checked) {
      this.selectedStudios.push(studio);
  } else {
      this.selectedStudios = this.selectedStudios.filter(s => s !== studio);
  }
  this.currentPage = 1;
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