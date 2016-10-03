import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  //authors: FormArray;
  //thumbnails: FormArray;
  book: Book = Book.empty();
  isUpdatingBook: boolean = false;

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let isbn = params['isbn'];

      if (isbn) {
        this.isUpdatingBook = true;
        this.book = this.bs.getSingle(isbn);
      }
    });
  }


  submitForm() {
    if (this.isUpdatingBook) {
      this.bs.update(this.book);
      this.router.navigate(['../../books', this.book.isbn], { relativeTo: this.route });
    } else {
      this.bs.create(this.book);
    }
  }
}
