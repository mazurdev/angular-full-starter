// core
import {BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// app
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
// utils
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {IosPWAComponent} from '@features/ios-pwa/ios-pwa.component';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  imports: [
    AppRoutingModule,
    AppModule,
    BrowserTransferStateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    SharedModule
  ],
  declarations: [
    // utils
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
