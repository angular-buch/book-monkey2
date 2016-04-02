import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Book} from '../../domain/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookStoreService {
  private api: string = 'http://book-monkey2-api.angular2buch.de/books';

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(this.api)
      .map(response => response.json());
  }

  getSingle(isbn: string) {
    return this.http
      .get(`${this.api}/${isbn}`)
      .map(response => response.json());
  }

  create(book: Book) {
    return this.http
      .post(this.api, JSON.stringify(book))
  }

  update(book: Book) {
    return this.http
      .put(`${this.api}/${book.isbn}`, JSON.stringify(book))
  }

  delete(isbn: string) {
    return this.http
      .delete(`${this.api}/${isbn}`);
  }
}
