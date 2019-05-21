import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/core/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'become-a-driver', loadChildren: './modules/drivers/drivers.module#DriversModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
