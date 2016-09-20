import { RouterModule, Routes } from '@angular/router';

import { Iteration4Component } from './iteration-4.component';

export const IT4_ROUTES: Routes = [
  {
    path: '',
    component: Iteration4Component,
    children: [
      { path: '', redirectTo: 'http', pathMatch: 'full' },
      { path: 'http', loadChildren: 'app/book-monkey/iteration-4/http/app.module#AppModule' },
    ]
  }
];

export const Iteration4Routing = RouterModule.forChild(IT4_ROUTES);
