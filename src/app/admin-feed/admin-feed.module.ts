import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminFeedPageRoutingModule } from './admin-feed-routing.module';

import { AdminFeedPage } from './admin-feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminFeedPageRoutingModule
  ],
  declarations: [AdminFeedPage]
})
export class AdminFeedPageModule {}
