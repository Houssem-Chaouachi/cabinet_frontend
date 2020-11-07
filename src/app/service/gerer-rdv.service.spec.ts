import { TestBed } from '@angular/core/testing';

import { GererRdvService } from './gerer-rdv.service';

describe('GererRdvService', () => {
  let service: GererRdvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GererRdvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
