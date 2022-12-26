import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListBodyComponent } from './game-list-body.component';

describe('GameListBodyComponent', () => {
  let component: GameListBodyComponent;
  let fixture: ComponentFixture<GameListBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameListBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
