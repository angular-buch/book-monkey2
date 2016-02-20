import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Book, Thumbnail} from '../../models/book';
export {Book, Thumbnail} from '../../models/book'

@Injectable()
export class BookStoreService {
  private api: string = 'https://book-monkey.firebaseio.com';

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(`${this.api}/books.json`)
      .map(response => response.json())
      .map(books => Object.keys(books).map((key) => this.toBook(books[key])));
  }

  getSingle(isbn: string) {
    return this.http
      .get(`${this.api}/books/${isbn}.json`)
      .map(response => response.json())
      .map(book => this.toBook(book));
  }

  create(book: Book) {
    return this.http
      .post(`${this.api}/books.json`, JSON.stringify(book))
  }

  update(book: Book) {
    return this.http
      .put(`${this.api}/books/${book.isbn}.json`, JSON.stringify(book))
  }

  delete(isbn: string) {
    return this.http
      .delete(`${this.api}/books/${isbn}.json`);
  }

  private toBook(rawBook: any): Book {

    var book = new Book(rawBook.isbn, rawBook.title, rawBook.authors);
    book.subtitle = rawBook.subtitle;
    book.thumbnails = rawBook.thumbnails ? rawBook.thumbnails.map(this.toThumbnail) : [];
    book.rating = rawBook.rating;
    book.published = new Date(rawBook.published);
    return book;
  }

  private toThumbnail(rawThumbnail: any): Thumbnail {
    return new Thumbnail(rawThumbnail.url, rawThumbnail.title);
  }
}
