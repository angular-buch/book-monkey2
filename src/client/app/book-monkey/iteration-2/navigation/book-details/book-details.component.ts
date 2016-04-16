import {Component, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Book} from '../../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.html',
  providers: [BookStoreService]
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
