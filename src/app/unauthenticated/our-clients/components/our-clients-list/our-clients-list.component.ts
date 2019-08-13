import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@app/configurations/constants';

@Component({
  selector: 'surivit-our-clients-list',
  templateUrl: './our-clients-list.component.html',
  styleUrls: ['./our-clients-list.component.scss']
})
export class OurClientsListComponent implements OnInit {

  CONSTANTS = CONSTANTS;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ OurClientsListComponent => ngOnInit ++..');
  }

}
