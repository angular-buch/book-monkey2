import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {FormComponent} from '../form/form.component'

@RouteConfig([
  { path: '/add', name: 'Add', component: FormComponent, data: { mode: 'add' }, useAsDefault: true },
  { path: '/update/:isbn',  name: 'Update', component: FormComponent, data: { mode: 'update'} }
])
@Component({
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class AdminComponent { }
