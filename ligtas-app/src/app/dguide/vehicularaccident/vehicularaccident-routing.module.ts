import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicularaccidentPage } from './vehicularaccident.page';

const routes: Routes = [
  {
    path: '',
    component: VehicularaccidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicularaccidentPageRoutingModule {}
