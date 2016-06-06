import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home/index';
import { BooksComponent } from './books/index';

@Routes([
  {path: '/home',  component: HomeComponent},
  {path: '/books', component: BooksComponent}
])

@Component({
  selector: 'book-monkey-app',
  moduleId: module.id,
  templateUrl: 'book-monkey.component.html',
  styles: [
    `.router-link-active {
      color: #ffffff !important;
      background: #DB282C !important;
    }`
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class BookMonkeyAppComponent { }
