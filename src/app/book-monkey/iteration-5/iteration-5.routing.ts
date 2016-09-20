import { RouterModule, Routes } from '@angular/router';

import { Iteration5Component } from './iteration-5.component';

export const IT5_ROUTES: Routes = [
  {
    path: '',
    component: Iteration5Component,
    children: [
      { path: '', redirectTo: 'directives', pathMatch: 'full' },
      { path: 'directives', loadChildren: 'app/book-monkey/iteration-5/directives/app.module#AppModule' },
      { path: 'pipes', loadChildren: 'app/book-monkey/iteration-5/pipes/app.module#AppModule' },
    ]
  }
];

export const Iteration5Routing = RouterModule.forChild(IT5_ROUTES);
