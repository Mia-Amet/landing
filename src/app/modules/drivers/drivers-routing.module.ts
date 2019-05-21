import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriversComponent } from './components/drivers/drivers.component';

const routes: Routes = [
  { path: '', component: DriversComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
