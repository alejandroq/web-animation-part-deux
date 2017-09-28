import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLitePositionComponent } from './timeline-lite-position.component';

describe('TimelineLitePositionComponent', () => {
  let component: TimelineLitePositionComponent;
  let fixture: ComponentFixture<TimelineLitePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineLitePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLitePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
