import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'surivit-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('..++ ContactComponent => ngOnInit ++..');
  }

}
