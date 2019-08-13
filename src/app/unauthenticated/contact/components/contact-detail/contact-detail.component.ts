import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@app/configurations/constants';
import { FILE_PATH } from '@app/configurations/file-path';

@Component({
  selector: 'surivit-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  CONSTANTS = CONSTANTS;
  FILE_PATH = FILE_PATH;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ ContactDetailComponent => ngOnInit ++..');
  }

}
