import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@app/configurations/constants';

@Component({
  selector: 'surivit-footer-content',
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.scss']
})
export class FooterContentComponent implements OnInit {

  CONSTANTS = CONSTANTS;

  pages: string[];

  constructor() { }

  ngOnInit(): void {
    console.log('..++ FooterContentComponent => ngOnInit ++..');
    this.pages = Object.keys(CONSTANTS.PAGES.UNAUTHENTICATED);
  }

}
