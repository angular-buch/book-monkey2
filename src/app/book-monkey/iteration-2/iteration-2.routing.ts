import { RouterModule, Routes } from '@angular/router';

import { Iteration2Component } from './iteration-2.component';
import { AppComponent as AppComponentDi } from './di/app.component';

export const IT2_ROUTES: Routes = [
  {
    path: '',
    component: Iteration2Component,
    children: [
      { path: '', redirectTo: 'di', pathMatch: 'full' },
      { path: 'di', component: AppComponentDi },
      { path: 'navigation', loadChildren: 'app/book-monkey/iteration-2/navigation/app.module#AppModule' }
    ]
  }
];

export const Iteration2Routing = RouterModule.forChild(IT2_ROUTES);
