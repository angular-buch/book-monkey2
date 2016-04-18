import {Component, Input} from 'angular2/core';
import {Book} from '../../domain/book';
import {IsbnPipe} from '../pipes/isbn-pipe/isbn-pipe';

@Component({
  selector: '.book-list-item',
  moduleId: module.id,
  templateUrl: 'book-list-item.component.html',
  pipes: [IsbnPipe]
})

export class BookListItem {
  @Input() book: Book;
}
