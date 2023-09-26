import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddhallPageRoutingModule } from './addhall-routing.module';

import { AddhallPage } from './addhall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddhallPageRoutingModule
  ],
  declarations: [AddhallPage]
})
export class AddhallPageModule {}
