import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PageComponent } from './components/page/page.component';
import { FeaturesComponent } from './components/features/features.component';
import { UsageComponent } from './components/usage/usage.component';
import { VideoSizeDirective } from './directives/video-size.directive';
import { ScrollDirective } from './directives/scroll.directive';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: PageComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    IntroComponent,
    PaginationComponent,
    PageComponent,
    FeaturesComponent,
    UsageComponent,
    VideoSizeDirective,
    ScrollDirective,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 100]
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
