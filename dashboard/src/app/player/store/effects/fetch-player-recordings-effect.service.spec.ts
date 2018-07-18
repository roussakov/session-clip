import { TestBed, inject } from '@angular/core/testing';

import { FetchPlayerRecordingsEffectService } from './fetch-player-recordings-effect.service';

describe('FetchPlayerRecordingsEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchPlayerRecordingsEffectService]
    });
  });

  it('should be created', inject([FetchPlayerRecordingsEffectService], (service: FetchPlayerRecordingsEffectService) => {
    expect(service).toBeTruthy();
  }));
});
