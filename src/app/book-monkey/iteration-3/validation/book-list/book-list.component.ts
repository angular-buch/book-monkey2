import { Component, OnInit } from '@angular/core';
import { BookListItemComponent } from '../book-list-item/index';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'book-list',
  templateUrl: 'book-list.component.html',
  directives: [BookListItemComponent, ROUTER_DIRECTIVES],
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bs: BookStoreService) { }

  ngOnInit(){
    this.books = this.bs.getAll();
  }
}