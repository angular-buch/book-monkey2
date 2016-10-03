import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Iteration2Component } from './iteration-2.component';
import { AppComponent as AppComponentDi } from './di/app.component';

export const routes: Routes = [
  {
    path: '',
    component: Iteration2Component,
    children: [
      { path: '', redirectTo: 'di', pathMatch: 'full' },
      { path: 'di', component: AppComponentDi },
      { path: 'navigation', loadChildren: 'app/book-monkey/iteration-2/navigation/app.module#AppModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Iteration2RoutingModule { }
