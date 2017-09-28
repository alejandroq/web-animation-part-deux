import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLiteBasicsComponent } from './timeline-lite-basics.component';

describe('TimelineLiteBasicsComponent', () => {
  let component: TimelineLiteBasicsComponent;
  let fixture: ComponentFixture<TimelineLiteBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineLiteBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLiteBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
