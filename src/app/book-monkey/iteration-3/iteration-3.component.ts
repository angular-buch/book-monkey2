import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ValidationApp} from './validation/validation.component';
import {FormsApp} from './forms/forms.component';

@Component({
  selector: 'iteration-3',
  template: `
    <div class="ui two small ordered steps">
    <a [routerLink]="['Forms']"
       [class.active]="router.isRouteActive(router.generate(['./Forms']))"
       class="step">
      <div class="content">
        <div class="title">Formulare</div>
      </div>
    </a>
    <a [routerLink]="['Form-Validation']"
       [class.active]="router.isRouteActive(router.generate(['./Form-Validation']))"
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
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: 'form/...', name: 'Forms', component: FormsApp, useAsDefault: true},
  {path: 'validation/...', name: 'Form-Validation', component: ValidationApp}
])
export class IterationThreeComponent {
  constructor(private router: Router) { }
}
