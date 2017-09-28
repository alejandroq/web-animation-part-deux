import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweenLiteLabPageComponent } from './tween-lite-lab-page.component';

describe('TweenLiteLabPageComponent', () => {
  let component: TweenLiteLabPageComponent;
  let fixture: ComponentFixture<TweenLiteLabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweenLiteLabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweenLiteLabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
