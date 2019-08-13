import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'surivit-applying-for-a-job',
  templateUrl: './applying-for-a-job.component.html',
  styleUrls: ['./applying-for-a-job.component.scss']
})
export class ApplyingForAJobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('..++ ApplyingForAJobComponent => ngOnInit ++..');
  }

}
