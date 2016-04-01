import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookListComponent} from './di/book-list/book-list.component';
import {NavigationComponent} from './navigation/navigation.component';

@Component({
  selector: 'iteration-2',
  template: `
  <h1 class="ui red header">
    <i class="book icon"></i>
    <div class="content">
      Iteration 2
    </div>
  </h1>
  <div class="ui small ordered steps">
    <a [routerLink]="['Dependency-Injection']"
       [class.active]="router.isRouteActive(router.generate(['./Dependency-Injection']))"
       class="step">
      <div class="content">
        <div class="title">Dependency-Injection</div>
      </div>
    </a>
    <a [routerLink]="['Navigation']"
       [class.active]="router.isRouteActive(router.generate(['./Navigation']))"
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
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: 'dependency-injection/', name: 'Dependency-Injection', component: BookListComponent, useAsDefault: true},
  {path: 'navigation/...', name: 'Navigation', component: NavigationComponent}
])
export class IterationTwoComponent {
  constructor(private router: Router){}
}
