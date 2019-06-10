import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {BrowserModule} from '@angular/platform-browser';
// import {NgtPwaMockModule} from '@ng-toolkit/pwa';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    // NgtPwaMockModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
