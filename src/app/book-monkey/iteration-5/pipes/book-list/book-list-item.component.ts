import {Component, Input} from 'angular2/core';
import {Book} from '../../domain/book';
import {Isbn} from '../pipes/isbn/isbn';

@Component({
  selector: '.book-list-item',
  templateUrl: '/app/book-monkey/iteration-5/pipes/book-list/book-list-item.component.html',
  pipes: [Isbn]
})

export class BookListItem {
  @Input() book: Book;
}
