import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration5Component } from './iteration-5.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration5Component,
    children: [
      { path: '', redirectTo: 'pipes', pathMatch: 'full' },
      { path: 'pipes', loadChildren: 'app/book-monkey/iteration-5/pipes/app.module.1#AppModule' },
      { path: 'directives', loadChildren: 'app/book-monkey/iteration-5/directives/app.module.1#AppModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration5RoutingModule { }