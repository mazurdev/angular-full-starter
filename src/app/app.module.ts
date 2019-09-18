// core
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// universal
import {TransferHttpCacheModule} from '@nguniversal/common';
import {NgtUniversalModule} from '@ng-toolkit/universal';
// utils
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
// app
import {HomeComponent} from './components/home/home.component';
import {LayoutsModule} from './layouts/layouts.module';
// features
import {DialogExampleComponent} from './shared/dialog/dialog-example/dialog-example.component';
import {LoaderComponent} from './features/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // dialog
    DialogExampleComponent,
    // features
    LoaderComponent
  ],
  imports: [
    // core
    BrowserModule,
    BrowserAnimationsModule,
    // utils
    SharedModule,
    CoreModule.forRoot(),
    CommonModule,
    LayoutsModule,
    // universal
    TransferHttpCacheModule,
    NgtUniversalModule,
    // app
    AppRoutingModule
  ],
  entryComponents: [
    DialogExampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
