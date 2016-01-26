import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';

import BookList from '../book-list/book-list';
import BookDetails from '../book-details/book-details';

@RouteConfig([
  { path: '/list', name: 'List', component: BookList, useAsDefault: true },
  { path: '/:isbn',  name: 'Details', component: BookDetails }
])
@Component({
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export default class Books {
  constructor() { }
}
