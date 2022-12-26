import { Component, OnInit } from '@angular/core';
import { GameAPIService } from 'src/app/services/game-api.service';

@Component({
  selector: 'app-game-list-body',
  templateUrl: './game-list-body.component.html',
  styleUrls: ['./game-list-body.component.scss']
})
export class GameListBodyComponent implements OnInit {
data:any;
constructor(private gameService:GameAPIService){}

ngOnInit() {
  this.gameService.getDataFromApi().subscribe(data => {
    this.data = data;
  });
}
}
