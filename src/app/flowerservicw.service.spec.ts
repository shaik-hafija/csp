import { TestBed } from '@angular/core/testing';

import { FlowerservicwService } from './flowerservicw.service';

describe('FlowerservicwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlowerservicwService = TestBed.get(FlowerservicwService);
    expect(service).toBeTruthy();
  });
});
