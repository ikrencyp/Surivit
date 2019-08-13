import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { ContactComponent } from './contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';


@NgModule({
  declarations: [ContactComponent, ContactDetailComponent],
  imports: [
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
