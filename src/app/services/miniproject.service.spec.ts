import { TestBed } from '@angular/core/testing';

import { MiniprojectService } from './miniproject.service';

describe('MiniprojectService', () => {
  let service: MiniprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
