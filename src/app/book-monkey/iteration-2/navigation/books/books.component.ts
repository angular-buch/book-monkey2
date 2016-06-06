import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { BookListComponent } from '../book-list/index';
import { BookDetailsComponent } from '../book-details/index';

@Routes([
  { path: '/',      component: BookListComponent },
  { path: '/:isbn', component: BookDetailsComponent }
])
@Component({
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>'
})
export class BooksComponent { }
