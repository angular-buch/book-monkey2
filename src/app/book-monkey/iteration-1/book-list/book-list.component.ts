import {Component} from 'angular2/core';
import {BookListItem} from './book-list-item.component';
import {Book} from '../domain/book';

@Component({
  selector: 'it1-book-list',
  directives: [BookListItem],
  templateUrl: '/app/book-monkey/iteration-1/book-list/book-list.component.html'
})
export class BookListComponent {
  books: Book[];

  constructor() {
      this.books = [
          new Book('999-9-99999-999-9', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']),
          new Book('978-3864901546', 'AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm']),
          new Book('978-3898647281', 'JavaScript für Enterprise-Entwickler', ['Oliver Ochs'])
      ];
  }
}
