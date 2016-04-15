import { it, describe, beforeEach, expect } from 'angular2/testing';
import { BookListComponent } from './book-list.component';

describe('Book List', () => {

  var bookList;
  beforeEach(() => {
    bookList = new BookListComponent();
  });

  it('should contain two example books', () => {

    expect(bookList.books.lenght).toEqual(2);
  });
});
