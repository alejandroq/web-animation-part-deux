import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweenLiteBasicsPageComponent } from './tween-lite-basics-page.component';

describe('TweenLiteBasicsPageComponent', () => {
  let component: TweenLiteBasicsPageComponent;
  let fixture: ComponentFixture<TweenLiteBasicsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweenLiteBasicsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweenLiteBasicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
