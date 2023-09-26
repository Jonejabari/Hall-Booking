import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBookPage } from './admin-book.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBookPageRoutingModule {}
