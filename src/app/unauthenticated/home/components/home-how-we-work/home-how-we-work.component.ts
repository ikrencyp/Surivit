import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@app/configurations/constants';

@Component({
  selector: 'surivit-home-how-we-work',
  templateUrl: './home-how-we-work.component.html',
  styleUrls: ['./home-how-we-work.component.scss']
})
export class HomeHowWeWorkComponent implements OnInit {

  CONSTANTS = CONSTANTS;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ HomeHowWeWorkComponent => ngOnInit ++..');
  }

}
