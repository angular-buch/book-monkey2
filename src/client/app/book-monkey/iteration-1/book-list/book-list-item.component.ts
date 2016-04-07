import {Component, Input} from 'angular2/core';
import {Book} from '../domain/book';

@Component({
  selector: '.it1-book-list-item',
  templateUrl: '/app/book-monkey/iteration-1/book-list/book-list-item.component.html'
})

export class BookListItem {
  @Input() book: Book;
}
