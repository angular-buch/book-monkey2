import { Component } from 'angular2/core';
import BookListItem from '../book-list-item/book-list-item';
import Book from '../../models/book';

@Component({
  selector: 'book-list',
  directives: [BookListItem],
  template: `
    <ul>
        <book-list-item *ngFor="#book of books" [book]="book"></book-list-item>
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
