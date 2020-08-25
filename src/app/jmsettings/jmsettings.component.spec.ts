import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JMSettingsComponent } from './jmsettings.component';

describe('JMSettingsComponent', () => {
  let component: JMSettingsComponent;
  let fixture: ComponentFixture<JMSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JMSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JMSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
