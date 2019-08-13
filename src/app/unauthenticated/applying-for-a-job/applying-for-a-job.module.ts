import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ApplyingForAJobRoutingModule } from './applying-for-a-job-routing.module';

import { ApplyingForAJobComponent } from './applying-for-a-job.component';
import { ApplyingForAJobDetailComponent } from './components/applying-for-a-job-detail/applying-for-a-job-detail.component';

@NgModule({
  declarations: [ApplyingForAJobComponent, ApplyingForAJobDetailComponent],
  imports: [
    ApplyingForAJobRoutingModule,
    SharedModule
  ]
})
export class ApplyingForAJobModule { }
