import {Component} from 'angular2/core';
import {Book} from '../../models/book';
import {BookStoreService} from '../../services/book-store-service/book-store-service';

@Component({
  selector: 'book-list',
  templateUrl: 'app/components/book-list/book-list.html',
  providers: [BookStoreService]
})
export class BookList {
  books: Array<Book>;

  constructor(bookStore: BookStoreService) {
      this.books = bookStore.getAll();
  }

}
