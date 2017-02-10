import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookResolver } from '../shared/book-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: ':isbn',
    component: BookDetailsComponent,
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
export class BookRoutingModule { }
