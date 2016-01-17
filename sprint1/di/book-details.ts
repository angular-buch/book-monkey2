//...
import {BookStoreService} from '../../service/book-store-service/book-store-service.ts';
//...

export class BookDetails {
  book: Book;

  constructor(params: RouteParams, bookStore: BookStoreService) {
      this.book = bookStore.getbyId[(<any>params.params).id];
  }
}
