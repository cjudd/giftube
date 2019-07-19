import { TestBed } from '@angular/core/testing';

import { GiftubeApiService } from './giftube-api.service';

describe('GiftubeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftubeApiService = TestBed.get(GiftubeApiService);
    expect(service).toBeTruthy();
  });
});
