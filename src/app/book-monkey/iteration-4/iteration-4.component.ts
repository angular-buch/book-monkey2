import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ActiveClassDirective } from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-4',
  template: `
    <div class="ui one small ordered steps">
    <a [routerLink]="['http']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Http</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})
export class IterationFourComponent { }
