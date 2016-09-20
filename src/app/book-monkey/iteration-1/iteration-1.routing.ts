import { RouterModule, Routes } from '@angular/router';

import { Iteration1Component } from './iteration-1.component';
import { AppComponent as AppComponentBookList } from './book-list/app.component';
import { AppComponent as AppComponentBookListRefactored } from './book-list-refactored/app.component';
import { AppComponent as AppComponentBookDetails } from './book-details/app.component';

export const IT1_ROUTES: Routes = [
  {
    path: '',
    component: Iteration1Component,
    children: [
      { path: '', redirectTo: 'book-list', pathMatch: 'full' },
      { path: 'book-list', component: AppComponentBookList },
      { path: 'book-list-refactored', component: AppComponentBookListRefactored },
      { path: 'book-details', component: AppComponentBookDetails }]
  }
];

export const Iteration1Routing = RouterModule.forChild(IT1_ROUTES);
