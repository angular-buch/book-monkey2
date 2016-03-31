import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookListComponent} from './di/book-list/book-list.component';
import {BooksComponent} from './navigation/books/books.component';

@Component({
  selector: 'iteration-2',
  template: `
  <div class="ui medium header">Iteration 2</div>
  <div class="ui large breadcrumb">
    <a [routerLink]="['Dependency-Injection']" class="section">Dependency-Injection</a>
    |
    <a [routerLink]="['Navigation']" class="section">Navigation (Routing)</a>
  </div>
  <hr>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: 'dependency-injection/', name: 'Dependency-Injection', component: BookListComponent, useAsDefault: true},
  {path: 'navigation/...', name: 'Navigation', component: BooksComponent}
])
export class IterationTwoComponent {}
