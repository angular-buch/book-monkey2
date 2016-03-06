import {Injectable} from 'angular2/core';
import {Book} from '../../models/book';

@Injectable()
export class BookStoreService {
  books: Array<Book>;

  constructor() {
      this.books = [
          new Book('ISBN1234567890', 'Angular 2', ['Gregor Woiwode', 'Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher']),
          new Book('978-3864901546', 'AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm']),
          new Book('978-3898647281', 'JavaScript für Enterprise-Entwickler', ['Oliver Ochs'])
      ];
  }

  getAll(){
    return this.books;
  }
}
