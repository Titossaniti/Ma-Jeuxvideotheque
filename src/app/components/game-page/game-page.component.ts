import { Component, OnInit } from '@angular/core';
import { GameAPIService } from 'src/app/services/game-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit{
item:any;
constructor(private gameService:GameAPIService, private route: ActivatedRoute){}
ngOnInit() {
  const gameName = this.route.snapshot.paramMap.get('gameName');
  this.gameService.getDataForPage('gameName').subscribe(data => {
    this.item = data.find((item:any) => item.image === gameName);
    console.log(this.item.name);console.log(this.item.year);console.log(this.item.type);
  });
}
}