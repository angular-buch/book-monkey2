import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui three small ordered steps">
      <a [routerLink]="['book-list']" routerLinkActive="active" class="step">
        <div class="content">
          <div class="title">Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['book-list-refactored']" routerLinkActive="active"  class="step">
        <div class="content">
          <div class="title">Verbesserte Listenansicht</div>
        </div>
      </a>
      <a [routerLink]="['book-details']" routerLinkActive="active" class="step">
        <div class="content">
          <div class="title">Detailansicht</div>
        </div>
      </a>
    </div>
    <div class="ui raised padded container segment">
      <router-outlet></router-outlet>
    </div>
  `
})
export class Iteration1Component { }
