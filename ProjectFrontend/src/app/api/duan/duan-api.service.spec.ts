import { TestBed } from '@angular/core/testing';

import { DuanApiService } from './duan-api.service';

describe('DuanApiService', () => {
  let service: DuanApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuanApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
