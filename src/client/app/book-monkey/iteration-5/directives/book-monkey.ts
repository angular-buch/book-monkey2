import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/index';
import {BooksComponent} from './books/index';
import {AdminComponent} from './admin/index';
import {ActiveClassDirective} from './directives/active-class/active-class.directive';


@RouteConfig([
  {path: 'home/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: 'books/...', name: 'Books', component: BooksComponent},
  {path: 'admin/...', name: 'Admin', component: AdminComponent}
])

@Component({
  selector: 'book-monkey-app',
  moduleId: module.id,
  templateUrl: 'book-monkey.html',
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective],
  providers: [HTTP_PROVIDERS]
})
export class BookMonkeyApp { }
