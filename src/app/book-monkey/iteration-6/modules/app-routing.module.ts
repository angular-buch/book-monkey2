import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'book',
    loadChildren: 'app/book-monkey/iteration-6/modules/book/book.module#BookModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/book-monkey/iteration-6/modules/admin/admin.module#AdminModule',
    canActivate: [CanNavigateToAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard]
})
export class AppRoutingModule { }
