import {Component} from 'angular2/core';
import {Book} from '../../models/book';

@Component({
  selector: 'book-list',
  template: `
    <ul>
        <li *ngFor="#book of books; #i=index">
            <a href="">{{ i }}) {{ book.title }}</a>
            <small>{{ book.isbn }}</small>
        </li>
    </ul>`
})
export default class BookList {
  books: Array<Book>;

  constructor() {
      this.books = [
          new Book('Angular 2', ['Gregor Woiwode', 'Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher'], 'ISBN1234567890'),
          new Book('AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm'], '978-3864901546'),
          new Book('JavaScript für Enterprise-Entwickler', ['Oliver Ochs'], '978-3898647281')
      ];
  }

}
