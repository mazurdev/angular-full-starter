import {BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
// IOS PWA
import {IosPWAComponent} from '@shared/ios-pwa/ios-pwa.component';

@NgModule({
  imports: [
    AppRoutingModule,
    AppModule,
    BrowserTransferStateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  declarations: [
    // IOS PWA
    IosPWAComponent
  ],
  entryComponents: [
    IosPWAComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}
