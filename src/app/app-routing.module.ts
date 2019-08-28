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
  {
    path: 'cd-wrapper',
    loadChildren: () => import('./components/cd-wrapper/cd-wrapper.module').then(m => m.CdWrapperModule)
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
