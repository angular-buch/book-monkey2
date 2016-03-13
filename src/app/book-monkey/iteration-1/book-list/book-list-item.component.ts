import {Component, Input} from 'angular2/core';
import {Book} from '../domain/book';

@Component({
  selector: 'it1-book-list-item',
  template: `
  <li>
    <a href="#">{{ book.title }}</a>
    <small>{{ book.isbn }}</small>
  </li>`
})

export class BookListItem {
  @Input() book: Book;

  constructor() {}

}
