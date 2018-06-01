import { TestBed, inject } from '@angular/core/testing';

import { PointsOfAttentionMetadataService } from './pa-metadata.service';

describe('PointsOfAttentionMetadataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PointsOfAttentionMetadataService]
    });
  });

  it('should be created', inject([PointsOfAttentionMetadataService], (service: PointsOfAttentionMetadataService) => {
    expect(service).toBeTruthy();
  }));
});
