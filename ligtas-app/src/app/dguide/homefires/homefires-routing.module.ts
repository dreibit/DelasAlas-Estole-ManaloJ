import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomefiresPage } from './homefires.page';

const routes: Routes = [
  {
    path: '',
    component: HomefiresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomefiresPageRoutingModule {}
