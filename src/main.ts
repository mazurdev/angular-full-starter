import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from '@environments/environment';
import {AppModule} from './app/app.module';

if (environment.production) {
  // Remove console logs in production
  window.console.log = () => {};
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
}, {passive: true});
