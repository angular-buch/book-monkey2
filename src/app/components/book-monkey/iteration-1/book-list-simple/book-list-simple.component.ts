import {Component} from 'angular2/core';
import {Book} from '../domain/book';

@Component({
  selector: 'it1-book-list-simple',
  templateUrl: 'app/components/book-monkey/iteration-1/book-list/book-list.html'
})
export class BookListSimpleComponent {
  books: Book[];

  constructor() {
      this.books = [
          new Book('999-9-99999-999-9', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']),
          new Book('978-3864901546', 'AngularJS', ['Philipp Tarasiewicz', 'Robin Böhm']),
          new Book('978-3898647281', 'JavaScript für Enterprise-Entwickler', ['Oliver Ochs'])
      ];
      this.books[0].subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
      this.books[1].subtitle = 'Eine praktische Einführung';
  }
}
