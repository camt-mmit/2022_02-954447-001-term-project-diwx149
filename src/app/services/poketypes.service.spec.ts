import { TestBed } from '@angular/core/testing';

import { PoketypesService } from './poketypes.service';

describe('PoketypesService', () => {
  let service: PoketypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoketypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
