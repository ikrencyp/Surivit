import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ServicesRoutingModule } from './services-routing.module';

import { ServicesComponent } from './services.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';

@NgModule({
  declarations: [ServicesComponent, ServiceDetailComponent],
  imports: [
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
