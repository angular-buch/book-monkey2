import {Component, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Book} from '../../domain/book';
import {BookStoreService} from '../services/books/book-store.service';
import {IsbnPipe} from '../pipes/isbn-pipe/isbn-pipe'

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.html',
  providers: [BookStoreService],
  pipes: [IsbnPipe]
})
export class BookDetailsComponent {
  book: Book;

  constructor(private params: RouteParams, private bs: BookStoreService) { }

  ngOnInit(){
    this.bs.getSingle(this.params.get('isbn'))
      .subscribe(res => this.book = res);
  }
}
