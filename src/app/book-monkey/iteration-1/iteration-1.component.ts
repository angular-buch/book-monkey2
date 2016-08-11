import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
  selector: 'iteration-1',
  template: `
    <div class="ui three small ordered steps">
      <a [routerLink]="['book-list']"
         class="step">
        <div class="content">
          <div class="title">Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['book-list-refactored']"
         class="step">
        <div class="content">
          <div class="title">Verbesserte Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['book-details']"
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
  directives: [ROUTER_DIRECTIVES]
})
export class IterationOneComponent { }
