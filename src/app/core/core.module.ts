// core
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
// utils
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';
// services
import {CookieService} from 'ngx-cookie-service';
import {LoaderService} from '../shared/services/data/loader.service';
import {LoaderInterceptor} from '../shared/utils/loader.iterceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    CookieService,
    LoaderService,
    {
      provide: APP_BASE_HREF,
      useValue: environment.baseUrl
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
