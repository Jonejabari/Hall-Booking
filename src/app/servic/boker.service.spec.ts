import { TestBed } from '@angular/core/testing';

import { BokerService } from './boker.service';

describe('BokerService', () => {
  let service: BokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
