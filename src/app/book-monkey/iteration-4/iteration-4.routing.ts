import { RouterModule, Routes } from '@angular/router';

import { Iteration4Component } from './iteration-4.component';
import { AppComponent as AppComponentHttp } from './http/app.component';
import { routes as routesHttp } from './http/app.routing';

export const IT4_ROUTES: Routes = [
  {
    path: 'iteration-4',
    component: Iteration4Component,
    children: [
      { path: '', redirectTo: 'http', pathMatch: 'full' },
      {
        path: 'http',
        component: AppComponentHttp,
        children: routesHttp
      }]
  }
];

export const Iteration4Routing = RouterModule.forChild(IT4_ROUTES);
