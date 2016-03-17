import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookListSimpleComponent} from './book-list-simple/book-list-simple.component';
import {BookListComponent} from './book-list/book-list.component';

@Component({
  selector: 'iteration-1',
  template: `
    <div class="ui medium header">Iteration 1</div>
    <div class="ui large breadcrumb">
      <a [routerLink]="['BookDetails']" class="section">Detailansicht</a>
      >
      <a [routerLink]="['BookListSimple']" class="section">Listenansicht</a>
      >
      <a [routerLink]="['BookList']" class="section">Verbesserte Listenansicht</a>
    </div>
    <hr>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/book-details',     name: 'BookDetails',    component: BookDetailsComponent, useAsDefault: true},
  {path: '/book-list-simple', name: 'BookListSimple', component: BookListSimpleComponent},
  {path: '/book-list',        name: 'BookList', component: BookListComponent}
])
export class IterationOneComponent {}
