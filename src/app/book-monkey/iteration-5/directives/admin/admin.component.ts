import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { BookFormComponent } from '../book-form/index'

@Routes([
  { path: '/',      component: BookFormComponent},
  { path: '/:isbn', component: BookFormComponent}
])
@Component({
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>'
})
export class AdminComponent { }
