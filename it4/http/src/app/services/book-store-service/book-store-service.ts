import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Book} from '../../models/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookStoreService {
  private api: string = 'https://book-monkey.firebaseio.com';

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(`${this.api}/books.json`)
      .map(response => response.json());
  }

  getSingle(isbn: string) {
    return this.http
      .get(`${this.api}/books/${isbn}.json`)
      .map(response => response.json());
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
}
