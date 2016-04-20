import {Component, Input} from 'angular2/core';
import {Book} from '../domain/book';

@Component({
  selector: '.book-list-item',
  moduleId: module.id,
  templateUrl: 'book-list-item.component.html'
})

export class BookListItem {
  @Input() book: Book;
}
