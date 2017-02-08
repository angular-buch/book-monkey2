import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
<TEX>\boldline</TEX>import 'rxjs/add/observable/of';

import { Book } from '../shared/book';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  const expectedBooks = [
    new Book('111', 'Book 1', [], new Date()),
    new Book('222', 'Book 2', [], new Date())
  ];

  let httpStub;

  beforeEach(() => {

<TEX>\boldline</TEX>    httpStub = {
<TEX>\boldline</TEX>      get: () => Observable.of({
<TEX>\boldline</TEX>        json: () => expectedBooks
<TEX>\boldline</TEX>      })
    };

    TestBed.configureTestingModule({
      providers: [
        {
<TEX>\boldline</TEX>          provide: Http,
<TEX>\boldline</TEX>          useValue: httpStub
        },
        BookStoreService
      ]
    });
  });

  it('should GET a list of all books',
<TEX>\boldline</TEX>    inject([BookStoreService], (service: BookStoreService) => {

      let receivedBooks: Book[];
      service.getAll().subscribe(b => receivedBooks = b);

      expect(receivedBooks.length).toBe(2);
      expect(receivedBooks[0].isbn).toBe('111');
      expect(receivedBooks[1].isbn).toBe('222');
    }));
});
