import { TestBed } from '@angular/core/testing';

import { GameAPIService } from './game-api.service';

describe('GameAPIService', () => {
  let service: GameAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
