import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JMServicesComponent } from './jmservices.component';

describe('JMServicesComponent', () => {
  let component: JMServicesComponent;
  let fixture: ComponentFixture<JMServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JMServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JMServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
