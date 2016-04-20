import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Book} from '../../domain/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookStoreService {
  private api: string = location.hostname === 'localhost' ? 'http://localhost:3000' : 'http://book-monkey2-api.angular2buch.de';
  private headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getAll(): Observable<Book[]> {
    return this.http
      .get(`${this.api}/books`)
      .map(response => response.json());
  }

  getSingle(isbn: string): Observable<Book>  {
    return this.http
      .get(`${this.api}/book/${isbn}`)
      .map(response => response.json());
  }

  create(book: Book): Observable<any>  {
    return this.http
      .post(`${this.api}/book`, JSON.stringify(book), { headers: this.headers })
  }

  update(book: Book): Observable<any>  {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, JSON.stringify(book), { headers: this.headers })
  }

  delete(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`);
  }
}
