import {Component} from 'angular2/core';
import {Book} from '../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'it4-book-list',
  templateUrl: 'app/components/book-monkey/iteration-4/book-list/book-list.component.html',
  providers: [BookStoreService]
})
export class BookListComponent {
  books: Array<Book> = [];

  constructor(bookStore: BookStoreService) {
    bookStore.getAll().subscribe(books => this.books = books);
  }
}
