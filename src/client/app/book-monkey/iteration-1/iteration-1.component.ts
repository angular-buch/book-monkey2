import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookMonkeyApp as BookDetailsApp} from './book-details/book-monkey';
import {BookMonkeyApp as BookListApp} from './book-list/book-monkey';
import {BookMonkeyApp as BookListRefactoredApp} from './book-list-refactored/book-monkey';

import {ActiveClassDirective} from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-1',
  template: `
    <div class="ui three small ordered steps">
      <a [routerLink]="['BookList']"
         activeClass="active"
         class="step">
        <div class="content">
          <div class="title">Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['BookListRefactored']"
         activeClass="active"
         class="step">
        <div class="content">
          <div class="title">Verbesserte Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['BookDetails']"
         activeClass="active"
         class="step">
        <div class="content">
          <div class="title">Detailansicht</div>
        </div>
      </a>
    </div>
    <div class="ui raised padded container segment">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})
@RouteConfig([
  {path: '/book-details',         name: 'BookDetails',        component: BookDetailsApp, useAsDefault: true},
  {path: '/book-list',            name: 'BookList',           component: BookListApp},
  {path: '/book-list-refactored', name: 'BookListRefactored', component: BookListRefactoredApp}
])
export class IterationOneComponent { }
