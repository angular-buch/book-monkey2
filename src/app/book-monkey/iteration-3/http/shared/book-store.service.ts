import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {
  private api: string = 'http://book-monkey2-api.angular-buch.com';
  private headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getAll(): Observable<Array<Book>> {
    return this.http
      .get(`${this.api}/books`)
      .map(response => response.json());
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get(`${this.api}/book/${isbn}`)
      .map(response => response.json());
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, JSON.stringify(book), { headers: this.headers });
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, JSON.stringify(book), { headers: this.headers });
  }

  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`);
  }
}
