import { TestBed, async, inject, tick} from '@angular/core/testing';
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
    async(inject([BookStoreService, MockBackend], (service: BookStoreService, backend: MockBackend) => {

      backend.connections.subscribe((c: MockConnection) => {

        expect(c.request.method).toBe(RequestMethod.Get);
        expect(c.request.url).toBe('https://book-monkey2-api.angular-buch.com/books');

        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(expectedBooks)
        })));
      });

      service.getAll().subscribe((books) => {
        expect(books.length).toBe(2);
        expect(books[0].isbn).toBe('111');
        expect(books[1].isbn).toBe('222');
      });
    })));

  it('should GET a single book from /book/:isbn',
    async(inject([BookStoreService, MockBackend], (service: BookStoreService, backend: MockBackend) => {

      backend.connections.subscribe((c: MockConnection) => {

        expect(c.request.method).toBe(RequestMethod.Get);
        expect(c.request.url).toBe('https://book-monkey2-api.angular-buch.com/book/111');

        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(expectedBooks[0])
        })));
      });

      service.getSingle('111').subscribe((book) => {
        expect(book.isbn).toBe('111');
      });
    })));

  it('should POST a new book to /book',
    async(inject([BookStoreService, MockBackend], (service: BookStoreService, backend: MockBackend) => {

      backend.connections.subscribe((c: MockConnection) => {

        expect(c.request.method).toBe(RequestMethod.Post);
        expect(c.request.url).toBe('https://book-monkey2-api.angular-buch.com/book');
        expect(c.request.getBody()).toEqual(JSON.stringify(expectedBooks[0]));

        c.mockRespond(new Response(new ResponseOptions({})));
      });

      service.create(expectedBooks[0]).subscribe();
    })));
});
