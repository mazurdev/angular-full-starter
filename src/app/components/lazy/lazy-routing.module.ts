// core
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// app
import {LazyComponent} from './lazy.component';
import {NestedComponent} from './nested/nested.component';

const routes: Routes = [
  {path: '', component: LazyComponent},
  {path: 'nested', component: NestedComponent, data: {animation: 'Nested'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {
}
