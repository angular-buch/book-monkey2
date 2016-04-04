import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {BookListComponent} from '../book-list/book-list.component';
import {BookDetailsComponent} from '../book-details/book-details.component';

@RouteConfig([
  { path: '/list', name: 'List', component: BookListComponent, useAsDefault: true },
  { path: '/:isbn',  name: 'Details', component: BookDetailsComponent }
])
@Component({
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class BooksComponent { }
