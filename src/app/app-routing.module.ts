import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { DevToolsPageComponent } from './pages/dev-tools-page/dev-tools-page.component';

import { GreenSockAnimationPlatformPageComponent } from './pages/green-sock-animation-platform-page/green-sock-animation-platform-page.component';

import { TweenComponent } from './pages/tween/tween.component';
import { TweenLiteBasicsPageComponent } from './pages/tween/tween-lite-basics-page/tween-lite-basics-page.component';
import { TweenLiteMethodPageComponent } from './pages/tween/tween-lite-method-page/tween-lite-method-page.component';
import { TweenLitePropertiesPageComponent } from './pages/tween/tween-lite-properties-page/tween-lite-properties-page.component';
import { TweenLiteLabPageComponent } from './pages/tween/tween-lite-lab-page/tween-lite-lab-page.component';

import { TimelineComponent } from './pages/timeline/timeline.component';
import { TimelineLiteBasicsComponent } from './pages/timeline/timeline-lite-basics/timeline-lite-basics.component';
import { TimelineLitePositionComponent } from './pages/timeline/timeline-lite-position/timeline-lite-position.component';
import { TimelineLiteLabComponent } from './pages/timeline/timeline-lite-lab/timeline-lite-lab.component';

import { MaxComponent } from './pages/max/max.component';
import { MaxPageComponent } from './pages/max/max-page/max-page.component';
import { MaxCssPageComponent } from './pages/max/max-css-page/max-css-page.component';
import { RepeatComponent } from './pages/max/repeat/repeat.component';
import { StaggerComponent } from './pages/max/stagger/stagger.component';
import { YoYoComponent } from './pages/max/yo-yo/yo-yo.component';
import { MaxLabPageComponent } from './pages/max/max-lab-page/max-lab-page.component';

import { PluginsPageComponent } from './pages/plugins-page/plugins-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction',  component: IntroductionPageComponent },
  { path: 'devtools',  component: DevToolsPageComponent },
  { path: 'green-sock-animation-platform',  component: GreenSockAnimationPlatformPageComponent },
  { path: 'tween',
    component: TweenComponent,
    children: [
      { path: 'basics',  component: TweenLiteBasicsPageComponent },
      { path: 'method',  component: TweenLiteMethodPageComponent },
      { path: 'properties',  component: TweenLitePropertiesPageComponent },
      { path: 'lab',  component: TweenLiteLabPageComponent }
    ]
  },
  { path: 'timeline',
    component: TimelineComponent,
    children: [
      { path: 'basics',  component: TimelineLiteBasicsComponent },
      { path: 'position',  component: TimelineLitePositionComponent },
      { path: 'lab',  component: TimelineLiteLabComponent }
    ]
  },
  { path: 'max',
    component: MaxComponent,
    children: [
      { path: 'basics',  component: MaxPageComponent },
      { path: 'css',  component: MaxCssPageComponent },
      { path: 'repeat',  component: RepeatComponent },
      { path: 'stagger',  component: StaggerComponent },
      { path: 'yo-yo',  component: MaxLabPageComponent },
      { path: 'lab',  component: YoYoComponent }
    ]
  },
  { path: 'plugins',  component: PluginsPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
