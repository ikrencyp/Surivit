import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'surivit-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('..++ ServicesComponent => ngOnInit ++..');
  }

}
