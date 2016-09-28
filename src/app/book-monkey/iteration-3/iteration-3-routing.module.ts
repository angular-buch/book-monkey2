import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration3Component } from './iteration-3.component';


export const routes: Routes = [
  {
    path: '',
    component: Iteration3Component,
    children: [
      { path: '', redirectTo: 'forms', pathMatch: 'full' },
      { path: 'forms-template-driven', loadChildren: 'app/book-monkey/iteration-3/forms-template-driven/app.module.1#AppModule' },
      { path: 'forms', loadChildren: 'app/book-monkey/iteration-3/forms/app.module.1#AppModule' },
      { path: 'validation', loadChildren: 'app/book-monkey/iteration-3/validation/app.module.1#AppModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration3RoutingModule { }
