import {Component} from 'angular2/core';
import {BookListItem} from './book-list-item.component';
import {Book} from '../../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-list',
  directives: [BookListItem],
  templateUrl: '/app/book-monkey/iteration-2/di/book-list/book-list.component.html',
  providers: [BookStoreService]
})
export class BookListComponent {
  books: Book[];

  constructor(bookStore: BookStoreService) {
    this.books = bookStore.getAll();
  }
}
