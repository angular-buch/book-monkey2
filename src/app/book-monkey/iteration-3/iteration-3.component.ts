import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ActiveClassDirective } from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-3',
  template: `
    <div class="ui two small ordered steps">
    <a [routerLink]="['form']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Formulare</div>
      </div>
    </a>
    <a [routerLink]="['validation']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Formularvalidierung</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})
export class IterationThreeComponent { }
