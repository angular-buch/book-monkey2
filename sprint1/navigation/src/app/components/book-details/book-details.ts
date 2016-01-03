import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import Book from '../../models/book';

@Component({
  selector: 'book-details',
  template: `<h2>{{ book?.title }}<small>{{ book?.subtitle }}</small></h2>
  <strong>ISBN:</strong> {{ book?.isbn }}<br>

  <strong>Autoren:</strong>
  <ul>
      <li *ngFor="#author of book?.authors">
          {{ author }}
      </li>
  </ul>`
})
export default class BookDetails {
  book: Book;

  constructor(private params: RouteParams) {
    var books = [
      new Book('999-9-99999-999-9', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']),
      new Book('978-3864901546', 'AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm']),
      new Book('978-3898647281', 'JavaScript für Enterprise-Entwickler', ['Oliver Ochs'])
    ];

    var isbn = params.get('isbn');
    this.book = books.find((book) => book.isbn === isbn);
  }
}
