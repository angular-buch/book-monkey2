import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';

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

    this.keyup.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
      tap(() => this.isLoading = false)
    )
    .subscribe(books => this.foundBooks = books);
  }
}
