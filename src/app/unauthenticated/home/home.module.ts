import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeLandingFullPageComponent } from './components/home-landing-full-page/home-landing-full-page.component';
import { HomeWelcomeComponent } from './components/home-welcome/home-welcome.component';
import { HomeHowWeWorkComponent } from './components/home-how-we-work/home-how-we-work.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLandingFullPageComponent,
    HomeWelcomeComponent,
    HomeHowWeWorkComponent,
    HomeServicesComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
