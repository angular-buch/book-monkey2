import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do'; // do is supposed to be used with side-effecting behavior
import 'rxjs/add/operator/mergeMap'; // flatMap is an alias of mergeMap

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  isLoading = false;
  foundBooks: Book[] = [];
  @Output() bookSelected = new EventEmitter<Book>();

  keyup = new EventEmitter<string>();

  constructor(private bs: BookStoreService) { }

  ngOnInit() {

    this.keyup
      .debounceTime(400)
      .distinctUntilChanged()
      .do(() => this.isLoading = true)
      .mergeMap(value => this.bs.getAllSearch(value))
      .do(() => this.isLoading = false)
      .subscribe(book => this.foundBooks = book);
  }
}
