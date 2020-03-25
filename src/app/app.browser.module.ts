// core
import {NgModule} from '@angular/core';
// app
import {AppComponent} from './app.component';
import {AppModule} from './app.module';

@NgModule({
  imports: [
    AppModule
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}
