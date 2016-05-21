import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {BookMonkeyApp as FormsApp} from './forms/book-monkey';
import {BookMonkeyApp as ValidationApp} from './validation/book-monkey';

import {ActiveClassDirective} from '../../directives/active-class/active-class.directive';

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
@Routes([
  {path: '/',           component: FormsApp},
  {path: '/form',       component: FormsApp},
  {path: '/validation', component: ValidationApp}
])
export class IterationThreeComponent { }
