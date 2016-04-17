import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {FormComponent} from '../form/form.component'

@RouteConfig([
  { path: '/add', name: 'Add', component: FormComponent, data: { mode: 'add' }, useAsDefault: true },
  { path: '/edit/:isbn',  name: 'Edit', component: FormComponent, data: { mode: 'edit'} }
])
@Component({
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class AdminComponent { }
