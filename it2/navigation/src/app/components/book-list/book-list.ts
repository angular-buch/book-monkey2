import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';
import Book from '../../models/book';

@Component({
  selector: 'book-list',
  directives: [RouterLink],
  template: `
    <ul class="pure-menu-list">
      <li *ngFor="#book of books; #i=index" class="pure-menu-item">
        <a [routerLink]="['../Details', {isbn: book.isbn}]" class="pure-menu-link">
          {{ i+1 }}) {{ book.title }} <small>{{ book.isbn }}</small>
        </a>
      </li>
    </ul>`
})
export default class BookList {
  books: Book[];

  constructor() {
      this.books = [
        new Book('999-9-99999-999-9', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']),
        new Book('978-3864901546', 'AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm']),
        new Book('978-3898647281', 'JavaScript für Enterprise-Entwickler', ['Oliver Ochs'])
      ];
  }
}
