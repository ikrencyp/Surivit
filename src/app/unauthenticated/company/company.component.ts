import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'surivit-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('..++ CompanyComponent => ngOnInit ++..');
  }

}
