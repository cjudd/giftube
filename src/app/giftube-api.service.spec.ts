import { TestBed, inject } from '@angular/core/testing';

import { GiftubeApiService } from './giftube-api.service';

describe('GiftubeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiftubeApiService]
    });
  });

  it('should be created', inject([GiftubeApiService], (service: GiftubeApiService) => {
    expect(service).toBeTruthy();
  }));
});
