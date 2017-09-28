import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevToolsPageComponent } from './dev-tools-page.component';

describe('DevToolsPageComponent', () => {
  let component: DevToolsPageComponent;
  let fixture: ComponentFixture<DevToolsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevToolsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
