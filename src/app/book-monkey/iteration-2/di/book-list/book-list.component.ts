import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';
import { /*TEX:\bfs*/BookStoreService/*TEX:\bfe*/ } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();
/*TEX:\bfs*/
  constructor(private bs: BookStoreService) { }/*TEX:\bfe*/

  ngOnInit() {/*TEX:\bfs*/
    this.books = this.bs.getAll();/*TEX:\bfe*/
  }

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }
}
