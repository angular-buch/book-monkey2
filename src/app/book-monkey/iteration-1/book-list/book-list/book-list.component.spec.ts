import { addProviders, async, inject } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';

describe('Component: BookList', () => {

  it('should create an instance', () => {
    let component = new BookListComponent();
    expect(component).toBeTruthy();
  });

  /*
  it('should contain two example books', () => {

    expect(bookList.books.length).toEqual(2);
  });
  */
});