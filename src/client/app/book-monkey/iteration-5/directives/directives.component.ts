import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';
import {FormComponent} from './form/form.component';
import {ActiveClassDirective} from './directives/active-class/active-class.directive'

@RouteConfig([
  {path: 'home/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: 'books/...', name: 'Books', component: BooksComponent},
  {path: 'admin/', name: 'Admin', component: FormComponent}
])

@Component({
  selector: 'pipes-app',
  templateUrl: '/app/book-monkey/iteration-5/directives/directives.component.html',
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})
export class DirectivesApp { }
