import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookListSimpleComponent} from './book-list-simple/book-list-simple.component';
import {BookListComponent} from './book-list/book-list.component';

@Component({
  selector: 'iteration-1',
  template: `
    <h1 class="ui red header">
      <i class="book icon"></i>
      <div class="content">
        Iteration 1
      </div>
    </h1>
    <div class="ui small ordered steps">
      <a [routerLink]="['BookDetails']"
         [class.active]="router.isRouteActive(router.generate(['./BookDetails']))"
         class="step">
        <div class="content">
          <div class="title">Detailansicht</div>
        </div>
      </a>
      <a [routerLink]="['BookListSimple']"
         [class.active]="router.isRouteActive(router.generate(['./BookListSimple']))"
         class="step">
        <div class="content">
          <div class="title">Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['BookList']"
         [class.active]="router.isRouteActive(router.generate(['./BookList']))"
         class="step">
        <div class="content">
          <div class="title">Verbesserte Listenansicht</div>
        </div>
      </a>
    </div>
    <div class="ui raised padded container segment">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/book-details',     name: 'BookDetails',    component: BookDetailsComponent, useAsDefault: true},
  {path: '/book-list-simple', name: 'BookListSimple', component: BookListSimpleComponent},
  {path: '/book-list',        name: 'BookList', component: BookListComponent}
])
export class IterationOneComponent {
  constructor(private router: Router){}
}
