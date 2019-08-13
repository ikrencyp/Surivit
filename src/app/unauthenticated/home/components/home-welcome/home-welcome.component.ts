import { Component, OnInit } from '@angular/core';
import { FILE_PATH } from '@app/configurations/file-path';

@Component({
  selector: 'surivit-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss']
})
export class HomeWelcomeComponent implements OnInit {

  FILE_PATH = FILE_PATH;

  constructor() { }

  ngOnInit(): void {
    console.log('..++ HomeWelcomeComponent => ngOnInit ++..');
  }

}
