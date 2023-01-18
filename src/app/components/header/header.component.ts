import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameAPIService } from 'src/app/services/game-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private http: HttpClient, private imageService: GameAPIService) { }
  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      this.images = data; 
  }
  }
  
}
