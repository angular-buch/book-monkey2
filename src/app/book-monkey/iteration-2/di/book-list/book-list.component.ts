import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { BookListItemComponent } from '../book-list-item/index';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'book-list',
  
  templateUrl: 'book-list.component.html',
  directives: [BookListItemComponent],
  providers: [BookStoreService]
})
export class BookListComponent implements OnInit {
  books: Book[];
  @Output() showDetailsEvent:EventEmitter<any> = new EventEmitter();

  constructor(private bs: BookStoreService) { }

  ngOnInit(){
    this.books = this.bs.getAll();
  }

  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }
}