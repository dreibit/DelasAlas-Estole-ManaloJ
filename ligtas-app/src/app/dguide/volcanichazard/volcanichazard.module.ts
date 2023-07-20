import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolcanichazardPageRoutingModule } from './volcanichazard-routing.module';

import { VolcanichazardPage } from './volcanichazard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolcanichazardPageRoutingModule
  ],
  declarations: [VolcanichazardPage]
})
export class VolcanichazardPageModule {}
