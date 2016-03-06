import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {BookListComponent} from './di/book-list/book-list.component';
import {BooksComponent} from './navigation/books/books.component';

@Component({
  selector: 'iteration-2',
  template: `
    <h2>Iteration 2</h2>
    <hr>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: 'dependency-injection/', name: 'Dependency-Injection', component: BookListComponent, useAsDefault: true},
  {path: 'navigation/...', name: 'Navigation', component: BooksComponent}
])
export class IterationTwoComponent {}
