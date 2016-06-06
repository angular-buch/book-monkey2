import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home/index';
import { BooksComponent } from './books/index';
import { AdminComponent } from './admin/index';
//import { ActiveClassDirective } from './directives/active-class/active-class.directive';

@Routes([
  {path: '/',      component: HomeComponent},
  {path: '/home',  component: HomeComponent},
  {path: '/books', component: BooksComponent},
  {path: '/admin', component: AdminComponent}
])

@Component({
  selector: 'book-monkey-app',
  moduleId: module.id,
  templateUrl: 'book-monkey.component.html',
  directives: [ROUTER_DIRECTIVES /*, ActiveClassDirective*/],
  providers: [HTTP_PROVIDERS]
})
export class BookMonkeyAppComponent { }
