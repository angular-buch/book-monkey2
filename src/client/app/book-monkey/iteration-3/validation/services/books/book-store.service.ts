import {Injectable} from 'angular2/core';
import {Book, Thumbnail} from '../../../domain/book';

@Injectable()
export class BookStoreService {
  books: Array<Book>;

  constructor() {
    let book1 = new Book(
      '9783864903571',
      'Angular 2',
      ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']
    );
    book1.rating = 5;
    book1.subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
    book1.thumbnails = [ new Thumbnail('http://goo.gl/nDi0Fc', 'Buchcover')];

    let book2 = new Book(
      '9783864901546',
      'AngularJS',
      ['Philipp Tarasiewicz', 'Robin Böhm']
    )
    book2.rating = 5;
    book2.subtitle = 'Eine praktische Einführung';
    book2.thumbnails = [new Thumbnail('https://goo.gl/Y5lFVE', 'Buchcover')];

    this.books = [
      book1, book2
    ];
  }

  getAll(){
    return this.books;
  }

  getSingle(isbn){
    return this.books.find(book => book.isbn === isbn);
  }
}
