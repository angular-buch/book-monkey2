import { Component } from 'angular2/core';
import Book from '../../models/book';

@Component({
  selector: 'book-list',
  templateUrl: 'app/components/book-list/book-list.html'
})
export default class BookList {
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
