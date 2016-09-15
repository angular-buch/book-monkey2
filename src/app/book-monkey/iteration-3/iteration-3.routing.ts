import { RouterModule, Routes } from '@angular/router';

import { Iteration3Component } from './iteration-3.component';
import { AppComponent as AppComponentForms } from './forms/app.component';
import { AppComponent as AppComponentValidationn } from './validation/app.component';
import { routes as routesForms } from './forms/app.routing';
import { routes as routesValdiation } from './validation/app.routing';

export const IT3_ROUTES: Routes = [
  {
    path: 'iteration-3',
    component: Iteration3Component,
    children: [
      { path: '', redirectTo: 'forms', pathMatch: 'full' },
      {
        path: 'forms',
        component: AppComponentForms,
        children: routesForms
      },
      {
        path: 'validation',
        component: AppComponentValidationn,
        children: routesValdiation
      }]
  }
];

export const Iteration3Routing = RouterModule.forChild(IT3_ROUTES);
