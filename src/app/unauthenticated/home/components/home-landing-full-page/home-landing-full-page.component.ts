import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'surivit-home-landing-full-page',
  templateUrl: './home-landing-full-page.component.html',
  styleUrls: ['./home-landing-full-page.component.scss']
})
export class HomeLandingFullPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('..++ HomeLandingFullPageComponent => ngOnInit ++..');
  }

}
