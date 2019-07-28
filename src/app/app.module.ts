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
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
// app
import {HomeComponent} from './components/home/home.component';
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
    // utils
    SharedModule,
    CoreModule,
    CommonModule,
    WrapperModule,
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
