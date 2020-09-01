import { TestBed } from '@angular/core/testing';

import { SlgService } from './slg.service';

describe('SlgService', () => {
  let service: SlgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
