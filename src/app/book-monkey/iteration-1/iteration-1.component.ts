import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ActiveClassDirective } from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-1',
  template: `
    <div class="ui three small ordered steps">
      <a [routerLink]="['book-list']"
         activeClass="active"
         class="step">
        <div class="content">
          <div class="title">Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['book-list-refactored']"
         activeClass="active"
         class="step">
        <div class="content">
          <div class="title">Verbesserte Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['book-details']"
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
export class IterationOneComponent { }
