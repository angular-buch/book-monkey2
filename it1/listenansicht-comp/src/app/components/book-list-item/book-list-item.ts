import {Component, Input} from 'angular2/core';
import Book from '../../models/book';

@Component({
  selector: 'book-list-item',
  template: `
  <li>
    <a href="#">{{ book.title }}</a>
    <small>{{ book.isbn }}</small>
  </li>`
})

export default class BookListItem {
  @Input() book: Book;

  constructor() {}

}
