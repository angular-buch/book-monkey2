import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Book } from './book';
import { BookFactory } from './book-factory';

@Injectable()
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';
  private headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getAll(): Observable<Array<Book>> {
    return this.http
      .get(`${this.api}/books`)
      .retry(3)
      .map(response => response.json())
      .map(rawBooks => rawBooks
        .map(rawBook => BookFactory.fromObject(rawBook))
      )
      .catch(this.errorHandler);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get(`${this.api}/book/${isbn}`)
      .retry(3)
      .map(response => response.json())
      .map(rawBook => BookFactory.fromObject(rawBook))
      .catch(this.errorHandler);
  }

  check(isbn: string): Observable<Boolean> {
    return this.http
      .get(`${this.api}/book/${isbn}/check`)
      .map(response => response.json())
      .catch(this.errorHandler);
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, JSON.stringify(book), { headers: this.headers })
      .catch(this.errorHandler);
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, JSON.stringify(book), { headers: this.headers })
      .catch(this.errorHandler);
  }

  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`)
      .catch(this.errorHandler);
  }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  getAllSearch(searchTerm: string): Observable<Array<Book>> {
    return this.http
      .get(`${this.api}/books/search/${searchTerm}`)
      .retry(3)
      .map(response => response.json())
      .map(rawBooks => rawBooks
        .map(rawBook => BookFactory.fromObject(rawBook))
      )
      .catch(this.errorHandler);
  }
}
