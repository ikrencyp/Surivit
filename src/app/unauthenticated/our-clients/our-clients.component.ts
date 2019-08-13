import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'surivit-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('..++ OurClientsComponent => ngOnInit ++..');
  }

}
