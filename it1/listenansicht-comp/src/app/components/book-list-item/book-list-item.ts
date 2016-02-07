import {Component, Input} from 'angular2/core';
import Book from '../../models/book';

@Component({
  selector: 'book-list-item',
  template: `
  <li class="pure-menu-list">
    <a href="#" class="pure-menu-link">
      {{ book.title }} <small>{{ book.isbn }}</small>
    </a>
  </li>`
})

export default class BookListItem {
  @Input() book: Book;

  constructor() {}

}
