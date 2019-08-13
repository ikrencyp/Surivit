import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@app/configurations/constants';

@Component({
  selector: 'surivit-footer-end-credit',
  templateUrl: './footer-end-credit.component.html',
  styleUrls: ['./footer-end-credit.component.scss']
})
export class FooterEndCreditComponent implements OnInit {

  CONSTANTS = CONSTANTS;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ FooterEndCreditComponent => ngOnInit ++..');
  }

}
