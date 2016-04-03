import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HttpApp} from './http/http.component';

@Component({
  selector: 'iteration-4',
  template: `
    <div class="ui one small ordered steps">
    <a [routerLink]="['Http']"
       [class.active]="router.isRouteActive(router.generate(['./Http']))"
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
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  {path: 'http/...', name: 'Http', component: HttpApp, useAsDefault: true},
])
export class IterationFourComponent {
  constructor(private router: Router){}
}
