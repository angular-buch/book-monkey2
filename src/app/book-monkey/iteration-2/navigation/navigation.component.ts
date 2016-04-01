import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';

@RouteConfig([
  {path: 'home/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: 'books/...', name: 'Books', component: BooksComponent}
])

@Component({
  selector: 'navigation',
  template: `
  <div class="ui two item tabs menu">
    <a [routerLink]="['./Home']"
       [class.active]="router.isRouteActive(router.generate(['./Home']))"
       class="item">
      Home
    </a>
    <a [routerLink]="['./Books']"
       [class.active]="router.isRouteActive(router.generate(['./Books']))"
       class="item">
      Bücher
    </a>
  </div>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class NavigationComponent {
  constructor(private router: Router){}
}
