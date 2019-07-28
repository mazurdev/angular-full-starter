// core
import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
// app
import {NotFoundComponent} from './not-found/not-found.component';
// 404
import {HomeComponent} from './components/home/home.component';
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
    loadChildren: () => import('./components/lazy/lazy.module').then(m => m.LazyModule),
    data: {animation: 'Lazy'}
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
