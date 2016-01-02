import { Component } from 'angular2/core';
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
  </ul>`,
})
export default class BookDetails {
  book: Book;

  constructor() {
    this.book = new Book(
      '999-9-99999-999-9',
      'Angular 2',
      ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']
    );
  }
}
