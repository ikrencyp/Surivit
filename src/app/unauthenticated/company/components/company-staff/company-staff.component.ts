import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@app/configurations/constants';

@Component({
  selector: 'surivit-company-staff',
  templateUrl: './company-staff.component.html',
  styleUrls: ['./company-staff.component.scss']
})
export class CompanyStaffComponent implements OnInit {

  CONSTANTS = CONSTANTS;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ CompanyStaffComponent => ngOnInit ++..');
  }

}
