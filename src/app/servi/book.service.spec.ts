import { TestBed } from '@angular/core/testing';

import { BOOKService } from './book.service';

describe('BOOKService', () => {
  let service: BOOKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BOOKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
