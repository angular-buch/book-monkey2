import { Component, OnInit } from '@angular/core';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { Observable } from "rxjs";

@Component({
  selector: 'bm-book-list',
  templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.books = this.bs.getAll();
  }
}
