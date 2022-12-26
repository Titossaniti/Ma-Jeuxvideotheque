import { Component,Input, OnInit } from '@angular/core';
import { GameAPIService } from 'src/app/services/game-api.service';

@Component({
  selector: 'app-game-list-card',
  templateUrl: './game-list-card.component.html',
  styleUrls: ['./game-list-card.component.scss']
})
export class GameListCardComponent implements OnInit{
  @Input() item:any;
  data:any;
  constructor(private gameService:GameAPIService){}
  ngOnInit() {
    this.gameService.getDataFromApi().subscribe(data => {
      this.data = data;
    });

  }
}
