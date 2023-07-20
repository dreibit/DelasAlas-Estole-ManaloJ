import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomefiresPageRoutingModule } from './homefires-routing.module';

import { HomefiresPage } from './homefires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomefiresPageRoutingModule
  ],
  declarations: [HomefiresPage]
})
export class HomefiresPageModule {}
