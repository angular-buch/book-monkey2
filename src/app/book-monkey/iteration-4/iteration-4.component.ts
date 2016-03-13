import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {BookListComponent} from './book-list/book-list.component';

@Component({
  selector: 'iteration-4',
  template: `
    <h2>Iteration 4</h2>
    <hr>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers: [HTTP_PROVIDERS]
})
@RouteConfig([
  {path: 'http/', name: 'Http', component: BookListComponent, useAsDefault: true},
])
export class IterationFourComponent {}
