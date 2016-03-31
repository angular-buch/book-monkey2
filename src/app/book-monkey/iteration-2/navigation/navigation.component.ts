import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';

@RouteConfig([
  {path: 'home/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: 'books/...', name: 'Books', component: BooksComponent}
])

@Component({
  selector: 'navigation',
  template: `
  <div>
  <a [routerLink]="['./Home']">Home</a>
  &nbsp;&bull;&nbsp;
  <a [routerLink]="['./Books']">Bücher</a>
  </div>
  <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

export class NavigationComponent {}
