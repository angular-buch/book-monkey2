import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ValidationComponent} from './validation/validation.component';
import {FormsComponent} from './forms/forms.component';

@Component({
  selector: 'iteration-3',
  template: `
  <div class="ui medium header">Iteration 3</div>
  <div class="ui large breadcrumb">
    <a [routerLink]="['Forms']" class="section">Formulare</a>
    |
    <a [routerLink]="['Form-Validation']" class="section">Formularvalidierung</a>
  </div>
  <hr>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: 'form/', name: 'Forms', component: FormsComponent, useAsDefault: true},
  {path: 'validation/', name: 'Form-Validation', component: ValidationComponent}
])
export class IterationThreeComponent {}
