import { TestBed } from '@angular/core/testing';

import { NfService } from './nf.service';

describe('NfService', () => {
  let service: NfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
