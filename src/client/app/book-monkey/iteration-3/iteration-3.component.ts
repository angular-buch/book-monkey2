import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookMonkeyApp as FormsApp} from './forms/book-monkey';
import {BookMonkeyApp as ValidationApp} from './validation/book-monkey';

import {ActiveClassDirective} from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-3',
  template: `
    <div class="ui two small ordered steps">
    <a [routerLink]="['Forms']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Formulare</div>
      </div>
    </a>
    <a [routerLink]="['Form-Validation']"
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
@RouteConfig([
  {path: 'form/...', name: 'Forms', component: FormsApp, useAsDefault: true},
  {path: 'validation/...', name: 'Form-Validation', component: ValidationApp}
])
export class IterationThreeComponent { }
