import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolcanichazardPage } from './volcanichazard.page';

const routes: Routes = [
  {
    path: '',
    component: VolcanichazardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolcanichazardPageRoutingModule {}
