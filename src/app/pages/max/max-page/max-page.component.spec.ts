import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPageComponent } from './max-page.component';

describe('MaxPageComponent', () => {
  let component: MaxPageComponent;
  let fixture: ComponentFixture<MaxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
