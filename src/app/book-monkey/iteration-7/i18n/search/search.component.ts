import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

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
      .debounceTime(500)
      .distinctUntilChanged()
      .do(() => this.isLoading = true)
      .switchMap(searchTerm => this.bs.getAllSearch(searchTerm))
      .do(() => this.isLoading = false)
      .subscribe(books => this.foundBooks = books);
  }
}
