import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLiteIntroductionComponent } from './timeline-lite-introduction.component';

describe('TimelineLiteIntroductionComponent', () => {
  let component: TimelineLiteIntroductionComponent;
  let fixture: ComponentFixture<TimelineLiteIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineLiteIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLiteIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
