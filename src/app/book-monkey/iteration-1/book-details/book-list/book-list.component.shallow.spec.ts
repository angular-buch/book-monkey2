import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { Book } from '../shared/book';

fdescribe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [BookListComponent],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit an event on click', () => {

    let receivedBook: Book;
    component.showDetailsEvent.subscribe((book) => receivedBook = book);

    fixture.nativeElement.querySelector('a').click();
    expect(receivedBook.title).toBe('Angular');
  });
});
