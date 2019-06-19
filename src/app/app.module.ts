// core
import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// universal
import {TransferHttpCacheModule} from '@nguniversal/common';
import {HttpClientModule} from '@angular/common/http';
import {NgtUniversalModule} from '@ng-toolkit/universal';
// utils
import {SharedModule} from './shared/shared.module';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';
import {CustomErrorHandler} from './shared/utils/custom-error-handler';
// app
import {HomeComponent} from './layouts/home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
// header/footer
import {WrapperModule} from './wrapper/wrapper.module';
// dialog
import {DialogExampleComponent} from './shared/dialog/dialog-example/dialog-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    // dialog
    DialogExampleComponent
  ],
  imports: [
    // core
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    // header/footer
    WrapperModule,
    // universal
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    // utils
    SharedModule
  ],
  entryComponents: [
    DialogExampleComponent
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.baseUrl
    },
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
