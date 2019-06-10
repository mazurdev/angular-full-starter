// core
import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
// app
import {NotFoundComponent} from './not-found/not-found.component';
// 404
import {HomeComponent} from './layouts/home/home.component';
import {PathResolveService} from './shared/services/path-resolve.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'lazy',
    loadChildren: './layouts/lazy/lazy.module#LazyModule'
  },
  // 404
  {path: '**', resolve: {path: PathResolveService}, component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
