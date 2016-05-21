import {Component, Input} from '@angular/core';
import {UrlSegment} from '@angular/router';
import {Book} from '../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.component.html',
  providers: [BookStoreService]
})
export class BookDetailsComponent {
  book: Book;

  constructor(private params: UrlSegment, private bs: BookStoreService) {
    this.book = bs.getSingle(params.segment('isbn'));
  }

  getRating(num: number){
    return new Array(num);
  }
}
