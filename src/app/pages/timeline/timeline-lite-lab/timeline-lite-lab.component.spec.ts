import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLiteLabComponent } from './timeline-lite-lab.component';

describe('TimelineLiteLabComponent', () => {
  let component: TimelineLiteLabComponent;
  let fixture: ComponentFixture<TimelineLiteLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineLiteLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLiteLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
