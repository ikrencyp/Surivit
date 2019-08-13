import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyingForAJobComponent } from './applying-for-a-job.component';

const routes: Routes = [
  {
    path: '',
    component: ApplyingForAJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyingForAJobRoutingModule { }
