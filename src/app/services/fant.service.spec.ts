import { TestBed } from '@angular/core/testing';

import { FantService } from './fant.service';

describe('FantService', () => {
  let service: FantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
