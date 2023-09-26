import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VcarsPage } from './vcars.page';

const routes: Routes = [
  {
    path: '',
    component: VcarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VcarsPageRoutingModule {}
