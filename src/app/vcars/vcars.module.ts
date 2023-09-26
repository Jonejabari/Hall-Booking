import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VcarsPageRoutingModule } from './vcars-routing.module';

import { VcarsPage } from './vcars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VcarsPageRoutingModule
  ],
  declarations: [VcarsPage]
})
export class VcarsPageModule {}
