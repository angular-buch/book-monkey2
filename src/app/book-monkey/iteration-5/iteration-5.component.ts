import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {PipesApp} from './pipes/pipes.component';

@Component({
  selector: 'iteration-5',
  template: `
    <div class="ui one small ordered steps">
    <a [routerLink]="['Pipes']"
       [class.active]="router.isRouteActive(router.generate(['./Pipes']))"
       class="step">
      <div class="content">
        <div class="title">Pipes</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  {path: 'pipes/...', name: 'Pipes', component: PipesApp, useAsDefault: true},
])
export class IterationFiveComponent {
  constructor(private router: Router){}
}
