import { Component, OnInit } from '@angular/core';

import { CONSTANTS } from '@app/configurations/constants';

@Component({
  selector: 'surivit-applying-for-a-job-detail',
  templateUrl: './applying-for-a-job-detail.component.html',
  styleUrls: ['./applying-for-a-job-detail.component.scss']
})
export class ApplyingForAJobDetailComponent implements OnInit {

  CONSTANTS = CONSTANTS;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ ApplyingForAJobDetailComponent => ngOnInit ++..');
  }

}
