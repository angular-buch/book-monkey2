import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './book-form/book-form.component';
import { BookResolver } from '../shared/book-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: BookFormComponent
  },
  {
    path: ':isbn',
    component: BookFormComponent,
    resolve: {
      book: BookResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
