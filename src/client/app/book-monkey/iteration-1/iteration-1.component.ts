import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookListComponent as BookListComponentRefactored} from './book-list-refactored/book-list.component';

@Component({
  selector: 'iteration-1',
  template: `
    <div class="ui three small ordered steps">
      <a [routerLink]="['BookDetails']"
         [class.active]="router.isRouteActive(router.generate(['./BookDetails']))"
         class="step">
        <div class="content">
          <div class="title">Detailansicht</div>
        </div>
      </a>
      <a [routerLink]="['BookList']"
         [class.active]="router.isRouteActive(router.generate(['./BookList']))"
         class="step">
        <div class="content">
          <div class="title">Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['BookListRefactored']"
         [class.active]="router.isRouteActive(router.generate(['./BookListRefactored']))"
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
  {path: '/book-details',         name: 'BookDetails',        component: BookDetailsComponent, useAsDefault: true},
  {path: '/book-list',            name: 'BookList',           component: BookListComponent},
  {path: '/book-list-refactored', name: 'BookListRefactored', component: BookListComponentRefactored}
])
export class IterationOneComponent {
  constructor(private router: Router) { }
}
