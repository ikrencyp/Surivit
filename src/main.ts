import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  window.console.log = () => { };
  window.console.time = () => { };
  window.console.timeEnd = () => { };
  if (window.console.table) {
    window.console.table = () => { };
  }
} else {
  if (!window.console.table) {
    window.console.table = window.console.log;
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
