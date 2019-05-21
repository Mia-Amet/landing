import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversRoutingModule } from './drivers-routing.module';

import { DriversComponent } from './components/drivers/drivers.component';

@NgModule({
  declarations: [DriversComponent],
  imports: [
    CommonModule,
    DriversRoutingModule
  ],
})
export class DriversModule { }
