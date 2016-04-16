import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookMonkeyApp as diApp} from './di/di.app';
import {BookMonkeyApp as NavigationApp} from './navigation/navigation.app';

import {ActiveClassDirective} from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-2',
  template: `
    <div class="ui two small ordered steps">
    <a [routerLink]="['Dependency-Injection']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Dependency-Injection</div>
      </div>
    </a>
    <a [routerLink]="['Navigation']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Navigation</div>
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
  {path: 'dependency-injection/', name: 'Dependency-Injection', component: diApp, useAsDefault: true},
  {path: 'navigation/...', name: 'Navigation', component: NavigationApp}
])
export class IterationTwoComponent { }
