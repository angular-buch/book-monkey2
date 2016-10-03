import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration4Component } from './iteration-4.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration4Component,
    children: [
      { path: '', redirectTo: 'http', pathMatch: 'full' },
      { path: 'http', loadChildren: 'app/book-monkey/iteration-4/http/app.module#AppModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration4RoutingModule { }