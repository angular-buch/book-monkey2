import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';
import { <TEX>\bfseries BookStoreService</TEX> } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

<TEX>\boldline</TEX>  constructor(private bs: BookStoreService) { }

  ngOnInit() {
<TEX>\boldline</TEX>    this.books = this.bs.getAll();
  }

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }
}
