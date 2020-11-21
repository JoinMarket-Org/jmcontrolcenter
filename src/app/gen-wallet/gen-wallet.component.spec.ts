import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenWalletComponent } from './gen-wallet.component';

describe('GenWalletComponent', () => {
  let component: GenWalletComponent;
  let fixture: ComponentFixture<GenWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
