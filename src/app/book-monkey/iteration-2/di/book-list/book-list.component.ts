import { Component, Output, EventEmitter } from '@angular/core';
import { BookListItemComponent } from '../book-list-item/index';
import { Book } from '../domain/book';
import { BookStoreService } from '../services/books/book-store.service';

@Component({
  selector: 'book-list',
  directives: [BookListItemComponent],
  moduleId: module.id,
  templateUrl: 'book-list.component.html',
  providers: [BookStoreService]
})
export class BookListComponent {
  books: Book[];
  @Output() showDetailsEvent:EventEmitter<any> = new EventEmitter();

  constructor(private bs: BookStoreService) {
    this.books = bs.getAll();
  }

  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }
}
