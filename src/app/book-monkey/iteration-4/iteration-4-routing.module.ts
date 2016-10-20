import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration4Component } from './iteration-4.component';


export const routes: Routes = [
  {
    path: '',
    component: Iteration4Component,
    children: [
      { path: '', redirectTo: 'template-driven-forms', pathMatch: 'full' },
      { path: 'template-driven-forms', loadChildren: 'app/book-monkey/iteration-4/template-driven-forms/app.module#AppModule' },
      { path: 'reactive-forms', loadChildren: 'app/book-monkey/iteration-4/reactive-forms/app.module#AppModule' },
      { path: 'custom-validation', loadChildren: 'app/book-monkey/iteration-4/custom-validation/app.module#AppModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration4RoutingModule { }
