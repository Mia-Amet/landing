import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { VideoBlockComponent } from './components/video-block/video-block.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    MenuComponent,
    VideoBlockComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    VideoBlockComponent,
    MenuComponent
  ]
})
export class CoreModule { }
