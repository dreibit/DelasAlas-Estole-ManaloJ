import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicularaccidentPageRoutingModule } from './vehicularaccident-routing.module';

import { VehicularaccidentPage } from './vehicularaccident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicularaccidentPageRoutingModule
  ],
  declarations: [VehicularaccidentPage]
})
export class VehicularaccidentPageModule {}
