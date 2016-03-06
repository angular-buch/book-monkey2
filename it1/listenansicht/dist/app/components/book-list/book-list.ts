import {Component} from 'angular2/core';
import {Book} from '../../domain/models';

@Component({
  selector: 'book-list',
  templateUrl: 'app/components/book-list/book-list.html'
})
export default class BookList {
  books: Book[];

  constructor() {
    this.books = [
      this.createBook('999-9-99999-999-9', 'Angular 2', 'Einstieg in die komponentenorientierte Entwicklung', ['Danny', 'Gregor']),
      this.createBook('978-3864901546', 'AngularJS', 'Eine praktische Einführung', ['Philipp'])
    ];
  }

  private createBook(isbn: string, title: string, subtitle: string, authors: Array<string>) : Book {
    let book = new Book(isbn, title);
    book.subtitle = subtitle;
    book.published = new Date();

    authors.forEach(a => book.addAuthor(a));

    return book;
  }
}
