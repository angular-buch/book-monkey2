import { Injectable } from 'angular2/angular2';
import { Book } from '../../models/book';

@Injectable()
export class BookStoreService {
  books: Array<Book>;

  constructor() {
      this.books = [
          new Book('Angular 2', ['Gregor Woiwode', 'Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher'], 'ISBN1234567890'),
          new Book('AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm'], '978-3864901546'),
          new Book('JavaScript für Enterprise-Entwickler', ['Oliver Ochs'], '978-3898647281')
      ];
  }

  getAll() {
    return this.books;
  }

  getById(id: number){
    return this.books[id];
  }
}
