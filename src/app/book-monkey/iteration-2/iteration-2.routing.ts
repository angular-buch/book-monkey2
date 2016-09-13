import { RouterModule, Routes } from '@angular/router';

import { Iteration2Component } from './iteration-2.component';
import { AppComponent as AppComponentDi } from './di/app.component';
import { AppComponent as AppComponentNavigation } from './navigation/app.component';

export const IT2_ROUTES: Routes = [
  {
    path: 'iteration-2',
    component: Iteration2Component,
    children: [
      { path: '', redirectTo: 'dependency-injection', pathMatch: 'full' },
      { path: 'dependency-injection', component: AppComponentDi },
      { path: 'navigation', component: AppComponentNavigation }]
  }
];

export const Iteration2Routing = RouterModule.forChild(IT2_ROUTES);
