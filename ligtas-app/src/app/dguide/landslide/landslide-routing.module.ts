import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandslidePage } from './landslide.page';

const routes: Routes = [
  {
    path: '',
    component: LandslidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandslidePageRoutingModule {}
