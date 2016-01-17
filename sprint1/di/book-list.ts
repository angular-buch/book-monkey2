//...
import {BookStoreService} from '../../service/book-store-service/book-store-service.ts';

//...

export class BookList {
  books: Array<Book>;

  constructor(bookStore: BookStoreService) {
      this.books = bookStore.getAll();
  }

}
