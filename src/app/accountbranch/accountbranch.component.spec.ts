import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountbranchComponent } from './accountbranch.component';

describe('AccountbranchComponent', () => {
  let component: AccountbranchComponent;
  let fixture: ComponentFixture<AccountbranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountbranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
