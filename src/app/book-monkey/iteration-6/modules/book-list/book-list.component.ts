import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  booksOb: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.booksOb = this.bs.getAll();
  }
}
