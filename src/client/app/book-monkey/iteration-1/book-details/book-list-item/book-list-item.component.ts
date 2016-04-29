import {Component, Input} from 'angular2/core';
import {Book} from '../domain/book';

@Component({
  selector: '.book-list-item',
  moduleId: __moduleName,
  templateUrl: 'book-list-item.component.html'
})

export class BookListItem {
  @Input() book: Book;
}
