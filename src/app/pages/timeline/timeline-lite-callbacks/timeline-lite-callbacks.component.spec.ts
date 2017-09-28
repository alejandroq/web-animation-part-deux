import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLiteCallbacksComponent } from './timeline-lite-callbacks.component';

describe('TimelineLiteCallbacksComponent', () => {
  let component: TimelineLiteCallbacksComponent;
  let fixture: ComponentFixture<TimelineLiteCallbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineLiteCallbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLiteCallbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
