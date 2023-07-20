import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandslidePageRoutingModule } from './landslide-routing.module';

import { LandslidePage } from './landslide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandslidePageRoutingModule
  ],
  declarations: [LandslidePage]
})
export class LandslidePageModule {}
