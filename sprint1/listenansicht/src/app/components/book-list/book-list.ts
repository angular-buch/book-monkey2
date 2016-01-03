import { Component } from 'angular2/core';
import Book from '../../models/book';

@Component({
  selector: 'book-list',
  template: `
    <ul>
        <li *ngFor="#book of books; #i=index">
            <a href="#">{{ i+1 }}) {{ book.title }}</a>
            <small>{{ book.isbn }}</small>
        </li>
    </ul>`
})
export default class BookList {
  books: Array<Book>;

  constructor() {
      this.books = [
          new Book('999-9-99999-999-9', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']),
          new Book('978-3864901546', 'AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm']),
          new Book('978-3898647281', 'JavaScript für Enterprise-Entwickler', ['Oliver Ochs'])
      ];
  }

}
