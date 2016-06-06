import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { BookFormComponent } from '../book-form/index'

@Routes([
  { path: 'books/',      component: BookFormComponent},
  { path: 'books/:isbn', component: BookFormComponent}
])
@Component({
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>'
})
export class AdminComponent { }
