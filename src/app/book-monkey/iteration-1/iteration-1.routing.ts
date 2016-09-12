import { RouterModule, Routes } from '@angular/router';

import { Iteration1Component } from './iteration-1.component';
import { AppComponent as AppComponent1 } from './book-list/app.component';
import { AppComponent as AppComponent2 } from './book-list-refactored/app.component';
import { AppComponent as AppComponent3 } from './book-details/app.component';

const IT1_ROUTES: Routes = [
  {
    path: 'iteration-1',
    children: [
      { path: '', component: Iteration1Component },
      { path: 'book-list', component: AppComponent1 },
      { path: 'book-list-refactored', component: AppComponent2 },
      { path: 'book-details', component: AppComponent3 }]
  }
];

export const iteration1Routing = RouterModule.forChild(IT1_ROUTES);
