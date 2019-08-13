import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { CONSTANTS } from '@app/configurations/constants';

@Component({
  selector: 'surivit-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  CONSTANTS = CONSTANTS;

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
    console.log(this.CONSTANTS.PAGES.UNAUTHENTICATED.SERVICES.COMPONENTS.PRODUCTS);
    console.log('..++ ServicesComponent => ngOnInit ++..');
  }

}
