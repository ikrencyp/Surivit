import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@app/configurations/constants';

@Component({
  selector: 'surivit-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {

  CONSTANTS = CONSTANTS;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ HomeServicesComponent => ngOnInit ++..');
  }

}
