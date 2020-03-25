import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppBrowserModule} from './app/app.browser.module';
import {environment} from '@environments/environment';

if (environment.production) {
  // Remove console logs in production
  window.console.log = () => {};
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppBrowserModule)
    .catch(err => console.error(err));
}, {passive: true});
