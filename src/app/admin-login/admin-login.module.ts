import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AdminLoginPageRoutingModule } from './admin-login-routing.module';

import { AdminLoginPage } from './admin-login.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdminLoginPageRoutingModule
  ],
  declarations: [AdminLoginPage]
})
export class AdminLoginPageModule {}
