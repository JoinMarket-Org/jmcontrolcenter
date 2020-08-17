import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopopupdialogComponent } from './infopopupdialog.component';

describe('InfopopupdialogComponent', () => {
  let component: InfopopupdialogComponent;
  let fixture: ComponentFixture<InfopopupdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopopupdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopopupdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
