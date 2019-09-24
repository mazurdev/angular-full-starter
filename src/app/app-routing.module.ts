// core
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomPreloadStrategy} from '@shared/utils/customPreloadStrategy';
// app
import {HomeComponent} from '@components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {animation: 'Home'}
  },
  {
    path: 'lazy',
    loadChildren: () => import('./components/lazy/lazy.module').then(m => m.LazyModule),
    data: {animation: 'Lazy', preload: true}
  },
  // 404
  {
    path: '404',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
    data: {animation: 'Not found'}
  },
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadStrategy,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
