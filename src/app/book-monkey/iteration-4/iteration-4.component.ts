import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {BookMonkeyApp as HttpApp} from './http/book-monkey';

import {ActiveClassDirective} from '../../directives/active-class/active-class.directive';

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
@Routes([
  {path: '/',     component: HttpApp},
  {path: '/http', component: HttpApp},
])
export class IterationFourComponent { }
