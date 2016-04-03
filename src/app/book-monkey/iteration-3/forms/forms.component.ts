import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';
import {FormComponent} from './form/form.component';

@RouteConfig([
  {path: 'home/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: 'books/...', name: 'Books', component: BooksComponent},
  {path: 'admin/', name: 'Admin', component: FormComponent}
])

@Component({
  selector: 'navigation-app',
  templateUrl: '/app/book-monkey/iteration-3/forms/forms.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class FormsApp {
  constructor(private router: Router){}
}
