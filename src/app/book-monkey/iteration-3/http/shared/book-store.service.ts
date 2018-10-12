import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'https://book-monkey2-api.angular-buch.com';
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  private errorHandler(error: Error | any) {
    return Observable.throw(error);
  }

  getAll(): Observable<Book[]> {
    return this.httpClient
      .get<BookRaw[]>(`${this.api}/books`, { observe: 'response' })
      .pipe(
        retry(3),
        map(response => {
          return response.body.map(b => BookFactory.fromObject(b));
        }),
        catchError(this.errorHandler)
      );
  }

  getSingle(isbn): Observable<Book> {
    return this.httpClient
      .get<BookRaw>(`${this.api}/book/${isbn}`, { observe: 'response' })
      .pipe(
        retry(3),
        map(response => {
          return BookFactory.fromObject(response.body);
        }),
        catchError(this.errorHandler)
      );
  }

  create(book: Book): Observable<any> {
    return this.httpClient
      .post(`${this.api}/book`, book, { headers: this.headers })
      .pipe(catchError(this.errorHandler));
  }

  update(book: Book): Observable<any> {
    return this.httpClient
      .put(`${this.api}/book/${book.isbn}`, book, { headers: this.headers })
      .pipe(catchError(this.errorHandler));
  }

  remove(isbn: string): Observable<any> {
    return this.httpClient
      .delete(`${this.api}/book/${isbn}`)
      .pipe(catchError(this.errorHandler));
  }
}
