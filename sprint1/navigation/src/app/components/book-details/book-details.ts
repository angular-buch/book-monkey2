import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Book} from '../../models/book';

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
      new Book('Angular 2', ['Gregor Woiwode', 'Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher'], 'ISBN1234567890'),
      new Book('AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm'], '978-3864901546'),
      new Book('JavaScript für Enterprise-Entwickler', ['Oliver Ochs'], '978-3898647281')
    ];

    this.book = books[params.get('id')];
  }
}
