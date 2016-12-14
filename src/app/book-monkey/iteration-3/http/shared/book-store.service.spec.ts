import { TestBed, inject } from '@angular/core/testing';
import {
  BaseRequestOptions,
  HttpModule,
  Http,
  RequestMethod,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Book } from '../shared/book';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  let expectedBooks = [
    new Book('111', 'Book 1', [], new Date()),
    new Book('222', 'Book 2', [], new Date())
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        BookStoreService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    });
  });

  it('should GET a list of all books from /books',
    inject([BookStoreService, MockBackend], (service: BookStoreService, backend: MockBackend) => {

      let connection: MockConnection, receivedBooks: Book[];
      backend.connections.subscribe(c => {
        connection = c;
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(expectedBooks)
        })));
      });

      service.getAll().subscribe(b => receivedBooks = b);

      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url).toBe('https://book-monkey2-api.angular-buch.com/books');
      expect(receivedBooks.length).toBe(2);
      expect(receivedBooks[0].isbn).toBe('111');
      expect(receivedBooks[1].isbn).toBe('222');
    }));

  it('should GET a single book from /book/:isbn',
    inject([BookStoreService, MockBackend], (service: BookStoreService, backend: MockBackend) => {

      let connection: MockConnection, receivedBook: Book;
      backend.connections.subscribe(c => {
        connection = c;
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(expectedBooks[0])
        })));
      });

      service.getSingle('111').subscribe(b => receivedBook = b);

      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url).toBe('https://book-monkey2-api.angular-buch.com/book/111');
      expect(receivedBook.isbn).toBe('111');
    }));

  it('should POST a new book to /book',
    inject([BookStoreService, MockBackend], (service: BookStoreService, backend: MockBackend) => {

      let connection: MockConnection;
      backend.connections.subscribe(c => connection = c);

      service.create(expectedBooks[0]).subscribe();

      expect(connection.request.method).toBe(RequestMethod.Post);
      expect(connection.request.url).toBe('https://book-monkey2-api.angular-buch.com/book');
      expect(connection.request.getBody()).toEqual(JSON.stringify(expectedBooks[0]));
    }));
});
