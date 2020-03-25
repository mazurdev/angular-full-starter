// core
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// universal
import {TransferHttpCacheModule} from '@nguniversal/common';
import {NgtUniversalModule} from '@ng-toolkit/universal';
// core & shared
import {CoreModule} from '@core/core.module';
import {SharedModule} from '@shared/shared.module';
// app
import {HomeComponent} from '@components/home/home.component';
import {IosPWAComponent} from '@features/ios-pwa/ios-pwa.component';
// utils
import {LayoutsModule} from '@layouts/layouts.module';
import {LoaderComponent} from '@features/loader/loader.component';
import {DialogExampleComponent} from '@features/dialog/dialog-example/dialog-example.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '@environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // features
    IosPWAComponent,
    LoaderComponent,
    DialogExampleComponent
  ],
  imports: [
    // core
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserTransferStateModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    // utils
    LayoutsModule,
    // universal
    TransferHttpCacheModule,
    NgtUniversalModule,
    // core & shared
    SharedModule,
    CoreModule.forRoot(),
    // app
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
