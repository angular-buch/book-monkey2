import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Book>> {
    return this.http
      .get<any[]>(`${this.api}/books`)
      .retry(3)
      .map(rawBooks => rawBooks
        .map(rawBook => BookFactory.fromObject(rawBook))
      )
      .catch(this.errorHandler);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get(`${this.api}/book/${isbn}`)
      .retry(3)
      .map(rawBook => BookFactory.fromObject(rawBook))
      .catch(this.errorHandler);
  }

  check(isbn: string): Observable<Boolean> {
    return this.http
      .get(`${this.api}/book/${isbn}/check`)
      .catch(this.errorHandler);
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, book, { responseType: 'text' })
      .catch(this.errorHandler);
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, book, { responseType: 'text' })
      .catch(this.errorHandler);
  }

  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/book/${isbn}`, { responseType: 'text' })
      .catch(this.errorHandler);
  }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  getAllSearch(searchTerm: string): Observable<Array<Book>> {
    return this.http
      .get<any[]>(`${this.api}/books/search/${searchTerm}`)
      .retry(3)
      .map(rawBooks => rawBooks
        .map(rawBook => BookFactory.fromObject(rawBook))
      )
      .catch(this.errorHandler);
  }
}
