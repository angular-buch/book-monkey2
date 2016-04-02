import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';
import {ActiveClassDirective} from './active-class.directive'

@RouteConfig([
  {path: 'home/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: 'books/...', name: 'Books', component: BooksComponent}
])

@Component({
  selector: 'navigation-app',
  templateUrl: '/app/book-monkey/iteration-2/navigation/navigation.component.html',
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})

export class NavigationApp {
  constructor(private router: Router){}
}
