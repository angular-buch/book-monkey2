import { RouterModule, Routes } from '@angular/router';

import { Iteration5Component } from './iteration-5.component';
import { AppComponent as AppComponentDirectives } from './directives/app.component';
import { AppComponent as AppComponentPipes } from './pipes/app.component';
import { routes as routesDirectives } from './directives/app.routing';
import { routes as routesPipes } from './pipes/app.routing';

export const IT5_ROUTES: Routes = [
  {
    path: 'iteration-5',
    component: Iteration5Component,
    children: [
      { path: '', redirectTo: 'directives', pathMatch: 'full' },
      {
        path: 'directives',
        component: AppComponentDirectives,
        children: routesDirectives
      },
      {
        path: 'pipes',
        component: AppComponentPipes,
        children: routesPipes
      }]
  }
];

export const Iteration5Routing = RouterModule.forChild(IT5_ROUTES);
