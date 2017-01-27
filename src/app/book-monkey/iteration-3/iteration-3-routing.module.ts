import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration3Component } from './iteration-3.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration3Component,
    children: [
      { path: '', redirectTo: 'http', pathMatch: 'full' },
      { path: 'http', loadChildren: 'app/book-monkey/iteration-3/http/app.module#AppModule' },
      { path: 'rxjs', loadChildren: 'app/book-monkey/iteration-3/rxjs/app.module#AppModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration3RoutingModule { }
