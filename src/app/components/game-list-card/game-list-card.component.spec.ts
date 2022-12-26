import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListCardComponent } from './game-list-card.component';

describe('GameListCardComponent', () => {
  let component: GameListCardComponent;
  let fixture: ComponentFixture<GameListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
