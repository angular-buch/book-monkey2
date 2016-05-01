import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {BookFormComponent} from '../book-form/index'

@RouteConfig([
  { path: 'books/', name: 'Add', component: BookFormComponent, data: { mode: 'add' }, useAsDefault: true },
  { path: 'books/:isbn',  name: 'Update', component: BookFormComponent, data: { mode: 'update'} }
])
@Component({
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class AdminComponent { }
