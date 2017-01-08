import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration1Component } from './iteration-1.component';
import { AppComponent as AppComponentComponents } from './components/app.component';
import { AppComponent as AppComponentPropertyBindings } from './property-bindings/app.component';
import { AppComponent as AppComponentEventBindings } from './event-bindings/app.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration1Component,
    children: [
      { path: '', redirectTo: 'components', pathMatch: 'full' },
      { path: 'components', component: AppComponentComponents },
      { path: 'property-bindings', component: AppComponentPropertyBindings },
      { path: 'event-bindings', component: AppComponentEventBindings }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration1RoutingModule { }
