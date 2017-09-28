import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLabPageComponent } from './max-lab-page.component';

describe('MaxLabPageComponent', () => {
  let component: MaxLabPageComponent;
  let fixture: ComponentFixture<MaxLabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxLabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxLabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
