// core
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
// utils
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';
// services
import {LoaderService} from '@shared/services/data/loader.service';
import {LoaderInterceptor} from '@shared/utils/loader.iterceptor';
import {CustomPreloadStrategy} from '@shared/utils/customPreloadStrategy';
import {DataService} from '@shared/services/data/data.service';
import {MediaService} from '@shared/services/media.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
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
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: CoreModule,
      providers: [
        CustomPreloadStrategy,
        LoaderService,
        DataService,
        MediaService,
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
    };
  }
}
