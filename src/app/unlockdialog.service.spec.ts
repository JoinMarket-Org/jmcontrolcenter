import { TestBed } from '@angular/core/testing';

import { UnlockdialogService } from './unlockdialog.service';

describe('UnlockdialogService', () => {
  let service: UnlockdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnlockdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
