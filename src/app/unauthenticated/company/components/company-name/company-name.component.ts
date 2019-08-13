import { Component, OnInit } from '@angular/core';

import { FILE_PATH } from '@app/configurations/file-path';

@Component({
  selector: 'surivit-company-name',
  templateUrl: './company-name.component.html',
  styleUrls: ['./company-name.component.scss']
})
export class CompanyNameComponent implements OnInit {

  FILE_PATH = FILE_PATH;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ CompanyNameComponent => ngOnInit ++..');
  }

}
