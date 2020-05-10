import { TestBed } from '@angular/core/testing';

import { NgprimeService } from './ngprime.service';

describe('NgprimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgprimeService = TestBed.get(NgprimeService);
    expect(service).toBeTruthy();
  });
});
