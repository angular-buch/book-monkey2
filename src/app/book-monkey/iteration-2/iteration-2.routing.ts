import { RouterModule, Routes } from '@angular/router';

import { Iteration2Component } from './iteration-2.component';
import { AppComponent as AppComponentDi } from './di/app.component';
import { AppComponent as AppComponentNavigation } from './navigation/app.component';
import { routes as routesNavigation } from './navigation/app.routing';

export const IT2_ROUTES: Routes = [
  {
    path: 'iteration-2',
    component: Iteration2Component,
    children: [
      { path: '', redirectTo: 'di', pathMatch: 'full' },
      { path: 'di', component: AppComponentDi },
      {
        path: 'navigation',
        component: AppComponentNavigation,
        children: routesNavigation
      }]
  }
];

export const Iteration2Routing = RouterModule.forChild(IT2_ROUTES);
