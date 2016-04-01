import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookListComponent} from './book-list/book-list.component';

@Component({
  selector: 'iteration-4',
  template: `
  <h1 class="ui red header">
    <i class="book icon"></i>
    <div class="content">
      Iteration 4
    </div>
  </h1>
  <div class="ui small ordered steps">
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
  {path: 'http/', name: 'Http', component: BookListComponent, useAsDefault: true},
])
export class IterationFourComponent {
  constructor(private router: Router){}
}
