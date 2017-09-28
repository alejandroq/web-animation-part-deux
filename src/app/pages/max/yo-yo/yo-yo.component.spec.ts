import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoYoComponent } from './yo-yo.component';

describe('YoYoComponent', () => {
  let component: YoYoComponent;
  let fixture: ComponentFixture<YoYoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoYoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoYoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
