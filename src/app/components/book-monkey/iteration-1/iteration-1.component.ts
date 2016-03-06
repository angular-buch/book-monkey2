import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookListSimpleComponent} from './book-list-simple/book-list-simple.component';
import {BookListComponent} from './book-list/book-list.component';

@Component({
  selector: 'iteration-1',
  template: `
    <h2>Iteration 1</h2>
    <hr>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: '/book-details',     name: 'BookDetails',    component: BookDetailsComponent, useAsDefault: true},
  {path: '/book-list-simple', name: 'BookListSimple', component: BookListSimpleComponent},
  {path: '/book-list',        name: 'BookList', component: BookListComponent}
])
export class IterationOneComponent {}
