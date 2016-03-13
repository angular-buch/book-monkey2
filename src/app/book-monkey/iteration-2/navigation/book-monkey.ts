import { Component } from 'angular2/core';
import { RouterOutlet, RouterLink, RouteConfig } from 'angular2/router';

import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/books/...', name: 'Books', component: BooksComponent}
])

@Component({
  selector: 'book-monkey-app',
  directives: [RouterOutlet, RouterLink],
  templateUrl: 'app/iteration-2/navigation/book-monkey.html'
})

export default class BookMonkeyApp {
  constructor() { }
}
