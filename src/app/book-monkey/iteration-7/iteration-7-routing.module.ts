import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration7Component } from './iteration-7.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration7Component,
    children: [
      { path: '', redirectTo: 'i18n', pathMatch: 'full' },
      { path: 'i18n', loadChildren: 'app/book-monkey/iteration-7/i18n/app.module#AppModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration7RoutingModule { }
