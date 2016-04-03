import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {BookListItem} from './book-list-item.component';
import {Book} from '../../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-list',
  directives: [BookListItem, RouterLink],
  templateUrl: '/app/book-monkey/iteration-4/http/book-list/book-list.component.html',
  providers: [BookStoreService]
})
export class BookListComponent {
  books: Book[];

  constructor(private bookStore: BookStoreService) { }

  ngOnInit(){
    this.bookStore.getAll()
      .subscribe(res => this.books = res);
  }
}
