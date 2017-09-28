import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSockAnimationPlatformPageComponent } from './green-sock-animation-platform-page.component';

describe('GreenSockAnimationPlatformPageComponent', () => {
  let component: GreenSockAnimationPlatformPageComponent;
  let fixture: ComponentFixture<GreenSockAnimationPlatformPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenSockAnimationPlatformPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenSockAnimationPlatformPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
