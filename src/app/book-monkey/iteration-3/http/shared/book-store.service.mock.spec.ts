import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Book } from '../shared/book';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  let expectedBooks = [
    new Book('111', 'Book 1', [], new Date()),
    new Book('222', 'Book 2', [], new Date())
  ];

  let httpMock;

  beforeEach(() => {

    httpMock = {
      get: () => Observable.of({
        json: () => expectedBooks
      })
    };

    spyOn(httpMock, 'get').and.callThrough();

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Http,
          useValue: httpMock
        },
        BookStoreService
      ]
    });
  });

  it('should GET a list of all books',
    inject([BookStoreService], (service: BookStoreService) => {

      let receivedBooks: Book[];
      service.getAll().subscribe(b => receivedBooks = b);

      expect(receivedBooks.length).toBe(2);
      expect(receivedBooks[0].isbn).toBe('111');
      expect(receivedBooks[1].isbn).toBe('222');

      // NEU
       expect(httpMock.get).toHaveBeenCalledTimes(1);
       expect(httpMock.get).toHaveBeenCalledWith('https://book-monkey2-api.angular-buch.com/books');
    }));
});
