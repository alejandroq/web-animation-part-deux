import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxCssPageComponent } from './max-css-page.component';

describe('MaxCssPageComponent', () => {
  let component: MaxCssPageComponent;
  let fixture: ComponentFixture<MaxCssPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxCssPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxCssPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
