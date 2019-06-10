// core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// universal
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HttpClientModule} from '@angular/common/http';
import {NgtUniversalModule} from '@ng-toolkit/universal';
// utils
import {SharedModule} from './shared/shared.module';
import {CookieService} from 'ngx-cookie-service';
// app
import {HomeComponent} from './layouts/home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // core
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    // universal
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    // utils
    SharedModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
