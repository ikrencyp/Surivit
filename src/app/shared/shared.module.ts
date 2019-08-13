import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ScrollToModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ScrollToModule,
    TranslateModule
  ]
})
export class SharedModule { }
