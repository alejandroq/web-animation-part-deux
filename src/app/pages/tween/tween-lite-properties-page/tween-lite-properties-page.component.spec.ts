import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweenLitePropertiesPageComponent } from './tween-lite-properties-page.component';

describe('TweenLitePropertiesPageComponent', () => {
  let component: TweenLitePropertiesPageComponent;
  let fixture: ComponentFixture<TweenLitePropertiesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweenLitePropertiesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweenLitePropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
