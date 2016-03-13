import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ValidationComponent} from './validation/validation.component';
import {FormsComponent} from './forms/forms.component';

@Component({
  selector: 'iteration-3',
  template: `
    <h2>Iteration 3</h2>
    <hr>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet]
})
@RouteConfig([
  {path: 'validation/', name: 'Form-Validation', component: ValidationComponent, useAsDefault: true},
  {path: 'form/', name: 'Forms', component: FormsComponent}
])
export class IterationThreeComponent {}
