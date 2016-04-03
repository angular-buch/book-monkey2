import {Component, Input} from 'angular2/core';
import {Book} from '../../domain/book';

@Component({
  selector: '.book-list-item',
  templateUrl: '/app/book-monkey/iteration-4/http/book-list/book-list-item.component.html'
})

export class BookListItem {
  @Input() book: Book;

  constructor() {}

}
