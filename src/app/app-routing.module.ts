import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./unauthenticated/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./unauthenticated/company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./unauthenticated/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'our-clients',
    loadChildren: () => import('./unauthenticated/our-clients/our-clients.module').then(m => m.OurClientsModule)
  },
  {
    path: 'applying-for-a-job',
    loadChildren: () => import('./unauthenticated/applying-for-a-job/applying-for-a-job.module').then(m => m.ApplyingForAJobModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./unauthenticated/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
