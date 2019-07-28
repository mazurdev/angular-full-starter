// core
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {ErrorHandler, NgModule, Optional, SkipSelf} from '@angular/core';
// utils
import {HttpClientModule} from '@angular/common/http';
import {CustomErrorHandler} from '../shared/utils/custom-error-handler';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
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
