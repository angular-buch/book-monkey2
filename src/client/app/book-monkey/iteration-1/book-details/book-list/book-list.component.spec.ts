import { it, describe, beforeEach, expect } from 'angular2/testing';
import { BookListComponent } from './book-list.component';

describe('Book List', () => {

  let bookList;
  beforeEach(() => {
    bookList = new BookListComponent();
  });

  it('should contain two example books', () => {

    expect(bookList.books.length).toEqual(2);
  });
});
