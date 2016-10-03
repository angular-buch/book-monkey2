import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration3Component } from './iteration-3.component';


export const routes: Routes = [
  {
    path: '',
    component: Iteration3Component,
    children: [
      { path: '', redirectTo: 'template-driven-forms', pathMatch: 'full' },
      { path: 'template-driven-forms', loadChildren: 'app/book-monkey/iteration-3/template-driven-forms/app.module.1#AppModule' },
      { path: 'reactive-forms', loadChildren: 'app/book-monkey/iteration-3/reactive-forms/app.module.1#AppModule' },
      { path: 'custom-validation', loadChildren: 'app/book-monkey/iteration-3/custom-validation/app.module.1#AppModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration3RoutingModule { }
