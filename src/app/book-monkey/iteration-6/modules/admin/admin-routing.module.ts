import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';


const routes: Routes = [
  {
    path: 'admin',
    component: BookFormComponent,
    canActivate: [CanNavigateToAdminGuard]
  },
  {
    path: 'admin/:isbn',
    component: BookFormComponent,
    canActivate: [CanNavigateToAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard]
})
export class AdminRoutingModule { }
