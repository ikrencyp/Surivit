import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { OurClientsRoutingModule } from './our-clients-routing.module';

import { OurClientsComponent } from './our-clients.component';
import { OurClientsListComponent } from './components/our-clients-list/our-clients-list.component';


@NgModule({
  declarations: [OurClientsComponent, OurClientsListComponent],
  imports: [
    OurClientsRoutingModule,
    SharedModule
  ]
})
export class OurClientsModule { }
