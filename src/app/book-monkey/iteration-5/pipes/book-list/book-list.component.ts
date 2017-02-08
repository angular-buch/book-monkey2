import { Component, OnInit } from '@angular/core';
<TEX>\boldline</TEX>import { Observable } from 'rxjs/Observable';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
<TEX>\boldline</TEX>  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
<TEX>\boldline</TEX>    this.books$ = this.bs.getAll();
  }
}
