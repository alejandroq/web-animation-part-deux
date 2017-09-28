import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { StaggerComponent } from './pages/max/stagger/stagger.component';
import { RepeatComponent } from './pages/max/repeat/repeat.component';
import { YoYoComponent } from './pages/max/yo-yo/yo-yo.component';
import { TimelineLiteIntroductionComponent } from './pages/timeline/timeline-lite-introduction/timeline-lite-introduction.component';
import { TimelineLiteBasicsComponent } from './pages/timeline/timeline-lite-basics/timeline-lite-basics.component';
import { TimelineLitePositionComponent } from './pages/timeline/timeline-lite-position/timeline-lite-position.component';
import { TimelineLiteCallbacksComponent } from './pages/timeline/timeline-lite-callbacks/timeline-lite-callbacks.component';
import { DevToolsPageComponent } from './pages/dev-tools-page/dev-tools-page.component';
import { TweenComponent } from './pages/tween/tween.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { GreenSockAnimationPlatformPageComponent } from './pages/green-sock-animation-platform-page/green-sock-animation-platform-page.component';
import { TweenLiteBasicsPageComponent } from './pages/tween/tween-lite-basics-page/tween-lite-basics-page.component';
import { TweenLiteMethodPageComponent } from './pages/tween/tween-lite-method-page/tween-lite-method-page.component';
import { TweenLitePropertiesPageComponent } from './pages/tween/tween-lite-properties-page/tween-lite-properties-page.component';
import { MaxComponent } from './pages/max/max.component';
import { MaxPageComponent } from './pages/max/max-page/max-page.component';
import { MaxCssPageComponent } from './pages/max/max-css-page/max-css-page.component';
import { MaxLabPageComponent } from './pages/max/max-lab-page/max-lab-page.component';
import { TweenLiteLabPageComponent } from './pages/tween/tween-lite-lab-page/tween-lite-lab-page.component';
import { TimelineLiteLabComponent } from './pages/timeline/timeline-lite-lab/timeline-lite-lab.component';
import { PluginsPageComponent } from './pages/plugins-page/plugins-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionPageComponent,
    StaggerComponent,
    RepeatComponent,
    YoYoComponent,
    TimelineLiteIntroductionComponent,
    TimelineLiteBasicsComponent,
    TimelineLitePositionComponent,
    TimelineLiteCallbacksComponent,
    DevToolsPageComponent,
    TweenComponent,
    TimelineComponent,
    GreenSockAnimationPlatformPageComponent,
    TweenLiteBasicsPageComponent,
    TweenLiteMethodPageComponent,
    TweenLitePropertiesPageComponent,
    MaxComponent,
    MaxPageComponent,
    MaxCssPageComponent,
    MaxLabPageComponent,
    TweenLiteLabPageComponent,
    TimelineLiteLabComponent,
    PluginsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
