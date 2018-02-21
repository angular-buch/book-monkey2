import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';/*TEX:\bfs*/
import 'rxjs/add/observable/of';/*TEX:\bfe*/

import { Book } from '../shared/book';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  const expectedBooks = [
    new Book('111', 'Book 1', [], new Date()),
    new Book('222', 'Book 2', [], new Date())
  ];

  let httpStub;

  beforeEach(() => {
/*TEX:\bfs*/
    httpStub = {
      get: () => Observable.of({
        json: () => expectedBooks
      })/*TEX:\bfe*/
    };

    TestBed.configureTestingModule({
      providers: [
        {/*TEX:\bfs*/
          provide: Http,
          useValue: httpStub/*TEX:\bfe*/
        },
        BookStoreService
      ]
    });
  });

  it('should GET a list of all books',/*TEX:\bfs*/
    inject([BookStoreService], (service: BookStoreService) => {/*TEX:\bfe*/

      let receivedBooks: Book[];
      service.getAll().subscribe(b => receivedBooks = b);

      expect(receivedBooks.length).toBe(2);
      expect(receivedBooks[0].isbn).toBe('111');
      expect(receivedBooks[1].isbn).toBe('222');
    }));
});
