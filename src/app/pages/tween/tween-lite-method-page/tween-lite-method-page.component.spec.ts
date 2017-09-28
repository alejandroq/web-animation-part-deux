import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweenLiteMethodPageComponent } from './tween-lite-method-page.component';

describe('TweenLiteMethodPageComponent', () => {
  let component: TweenLiteMethodPageComponent;
  let fixture: ComponentFixture<TweenLiteMethodPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweenLiteMethodPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweenLiteMethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
