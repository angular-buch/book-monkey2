import { addProviders, async, inject } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';

// very basic unit test, which is testing the class only
// @Decorators are not evaluated, Live Cycle does not happen!
describe('[iteration-1/book-list-refactored] Component: BookList', () => {

  let bookList: BookListComponent;

  beforeEach(() => {
    bookList = new BookListComponent();
  });

  // creating an instance is easy, since we have no dependencies for now
  it('should create an instance', () => {
    expect(bookList).toBeTruthy();
  });

  // this won't work, ngOnInit() is never called!
  xit('should contain two example books', () => {
    expect(bookList.books.length).toEqual(2);
  });
});
