import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { CompanyRoutingModule } from './company-routing.module';

import { CompanyComponent } from './company.component';
import { CompanyNameComponent } from './components/company-name/company-name.component';
import { CompanyStaffComponent } from './components/company-staff/company-staff.component';

@NgModule({
  declarations: [CompanyComponent, CompanyNameComponent, CompanyStaffComponent],
  imports: [
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
