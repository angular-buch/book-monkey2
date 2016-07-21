import { Injectable } from '@angular/core';
import { Book, Thumbnail } from './book';

@Injectable()
export class BookStoreService {
  books: Array<Book>;

  constructor() {
    this.books = [
      new Book(
       '9783864903571',
       'Angular 2',
       ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'],
       new Date(2016, 5, 26),
       'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen',
       5,
       [new Thumbnail('http://goo.gl/nDi0Fc','Buchcover')],
       'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2...'
     ),
     new Book(
       '9783864901546',
       'AngularJS',
       ['Philipp Tarasiewicz', 'Robin Böhm'],
       new Date(2014, 5, 29),
       'Eine praktische Einführung',
       5,
       [new Thumbnail('https://goo.gl/Y5lFVE','Buchcover')],
       'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...'
     )
    ]
  }

  getAll(): Array<Book> {
    return this.books;
  }

  getSingle(isbn): Book {
    return this.books.find(book => book.isbn === isbn);
  }

  create(book: Book): void {
    console.log('creates new book', book);
  }

  update(book: Book): void {
    console.log('updates book', book);
  }

  delete(isbn: string): void {
    console.log(`deletes book with isbn: ${isbn}`);
  }
}
