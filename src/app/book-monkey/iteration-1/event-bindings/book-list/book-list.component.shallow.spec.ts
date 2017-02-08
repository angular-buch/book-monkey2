import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { Book } from '../shared/book';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(<TEX>\bfseries async</TEX>(() => {
<TEX>\boldline</TEX>    TestBed.configureTestingModule({
<TEX>\boldline</TEX>        declarations: [BookListComponent],
<TEX>\boldline</TEX>        schemas: [NO_ERRORS_SCHEMA]
<TEX>\boldline</TEX>      })
<TEX>\boldline</TEX>      .compileComponents();
  }));

  beforeEach(() => {
<TEX>\boldline</TEX>    fixture = TestBed.createComponent(BookListComponent);
<TEX>\boldline</TEX>    component = fixture.componentInstance;
<TEX>\boldline</TEX>    fixture.detectChanges();
  });

  it('should emit the showDetailsEvent on click', () => {

    let receivedBook: Book;
    component.showDetailsEvent.subscribe((book) => receivedBook = book);

    fixture.nativeElement.querySelector('a').click();
    expect(receivedBook.title).toBe('Angular');
  });
});
