import { TestBed, async, inject } from '@angular/core/testing';
import {
  BaseRequestOptions,
  HttpModule,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  const exampleBooks = [
    {
      'title': 'Book1',
      'subtitle': 'Subtitle Book1',
      'description': 'Description of the first book',
      'rating': 1,
      'authors': [
        'Max Mustermann'
      ],
      'published': new Date(2016, 12, 23),
      'isbn': '1111111111',
      'thumbnails': [
        {
          'url': 'https://example.com',
          'title': 'Example1'
        }
      ]
    },
    {
      'title': 'Book2',
      'subtitle': 'Subtitle Book2',
      'description': 'Description of the second book',
      'rating': 2,
      'authors': [
        'Erika Mustermann'
      ],
      'published': new Date(2016, 12, 24),
      'isbn': '2222222222222',
      'thumbnails': [
        {
          'url': 'https://example.org',
          'title': 'Example2'
        }
      ]
    }
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

  describe('getAll()', () => {

    it('should return an Observable<Array<Book>>',
        async(inject([BookStoreService, MockBackend], (bookStoreService, mockBackend) => {

        const mockResponse = exampleBooks;

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse),
            status: 200
          })));
        });

        bookStoreService.getAll().subscribe((books) => {
          expect(books.length).toBe(2);
          expect(books[0].title).toEqual('Book1');
          expect(books[1].title).toEqual('Book2');
          expect(books[0].subtitle).toEqual('Subtitle Book1');
          expect(books[1].subtitle).toEqual('Subtitle Book2');
          expect(books[0].description).toEqual('Description of the first book');
          expect(books[1].description).toEqual('Description of the second book');
          expect(books[0].rating).toBe(1);
          expect(books[1].rating).toBe(2);
          expect(books[0].authors.length).toBe(1);
          expect(books[1].authors.length).toBe(1);
          expect(books[0].authors[0]).toEqual('Max Mustermann');
          expect(books[1].authors[0]).toEqual('Erika Mustermann');
          expect(books[0].published).toEqual('2017-01-22T23:00:00.000Z');
          expect(books[1].published).toEqual('2017-01-23T23:00:00.000Z');
          expect(books[0].isbn).toEqual('1111111111');
          expect(books[1].isbn).toEqual('2222222222222');
          expect(books[0].thumbnails.length).toBe(1);
          expect(books[1].thumbnails.length).toBe(1);
          expect(books[0].thumbnails[0].url).toEqual('https://example.com');
          expect(books[1].thumbnails[0].url).toEqual('https://example.org');
          expect(books[0].thumbnails[0].title).toEqual('Example1');
          expect(books[1].thumbnails[0].title).toEqual('Example2');
        });

    })));
  });


  describe('getSingle()', () => {

    it('should return an Observable<Book>',
        async(inject([BookStoreService, MockBackend], (bookStoreService, mockBackend) => {

        const mockResponse = exampleBooks[0];

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse),
            status: 200
          })));
        });

        let isbn = '1111111111';

        bookStoreService.getSingle(isbn).subscribe((book) => {
          expect(book.title).toEqual('Book1');
          expect(book.subtitle).toEqual('Subtitle Book1');
          expect(book.description).toEqual('Description of the first book');
          expect(book.authors[0]).toEqual('Max Mustermann');
          expect(book.published).toEqual('2017-01-22T23:00:00.000Z');
          expect(book.rating).toBe(1);
          expect(book.isbn).toEqual('1111111111');
          expect(book.thumbnails.length).toBe(1);
          expect(book.thumbnails[0].url).toEqual('https://example.com');
          expect(book.thumbnails[0].title).toEqual('Example1');
        });

    })));
  });


  describe('create()', () => {

    it('should return an Observable<Book>',
        async(inject([BookStoreService, MockBackend], (bookStoreService, mockBackend) => {

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            status: 200
          })));
        });

        let book = exampleBooks[0];

        bookStoreService.create(book).subscribe((res) => {
          expect(res).toBeTruthy();
        });

    })));
  });

});
