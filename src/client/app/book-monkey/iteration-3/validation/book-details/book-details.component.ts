import {Component, Input} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Book} from '../../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-details',
  templateUrl: '/app/book-monkey/iteration-3/validation/book-details/book-details.html',
  providers: [BookStoreService],
  directives: [ROUTER_DIRECTIVES]
})
export class BookDetailsComponent {
  book: Book;

  constructor(private params: RouteParams, private bs: BookStoreService) {
    this.book = bs.getSingle(params.get('isbn'));
  }

  getRating(num: number){
    return new Array(num);
  }
}
