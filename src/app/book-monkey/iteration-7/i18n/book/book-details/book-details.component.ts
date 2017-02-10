import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../shared/book';
import { BookFactory } from '../../shared/book-factory';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  book: Book = BookFactory.empty();

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.book = this.route.snapshot.data['book'];
  }

  getRating(num: number) {
    return new Array(num);
  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn)
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }
}
