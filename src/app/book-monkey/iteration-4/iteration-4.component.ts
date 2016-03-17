import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookListComponent} from './book-list/book-list.component';

@Component({
  selector: 'iteration-4',
  template: `
  <div class="ui medium header">Iteration 3</div>
  <div class="ui large breadcrumb">
    <a [routerLink]="['Http']" class="section">Http</a>
  </div>
  <hr>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  {path: 'http/', name: 'Http', component: BookListComponent, useAsDefault: true},
])
export class IterationFourComponent {}
