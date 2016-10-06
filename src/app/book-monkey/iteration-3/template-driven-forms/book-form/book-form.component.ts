import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  book: Book = Book.empty();
  isUpdatingBook: boolean = false;

  constructor(
    private bs: BookStoreService
  ) { }

  ngOnInit() { }

  submitForm(value: {}) {
    console.log(value);
    this.bs.create(this.book);
  }
}
