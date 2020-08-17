import { TestBed } from '@angular/core/testing';

import { InfodialogService } from './infodialog.service';

describe('InfodialogService', () => {
  let service: InfodialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfodialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
