import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BookListComponent } from './book-list.component';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { Book } from '../shared/book';

//
// this will fail with: Can't bind to 'routerLink' since it isn't a known property of 'a'.
//
describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  let expectedBooks = [
    new Book('111', 'Book 1', [], new Date()),
    new Book('222', 'Book 2', [], new Date())
  ];

  let serviceMock;

  beforeEach(async(() => {

    serviceMock = {
      getAll: () => Observable.of(expectedBooks)
    };

    //spyOn(serviceMock, 'get').and.callThrough();

    TestBed.configureTestingModule({
        declarations: [BookListComponent, BookListItemComponent],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get all books from BookStoreService', () => {

    expect(component.books.length).toBe(2);
    expect(component.books[0].isbn).toBe('111');
    expect(component.books[1].isbn).toBe('222');
  });
});
