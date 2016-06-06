import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { BookListItemComponent } from '../book-list-item/index';
import { Book } from '../domain/book';
import { BookStoreService } from '../services/books/book-store.service';

@Component({
  selector: 'book-list',
  directives: [BookListItemComponent, ROUTER_DIRECTIVES],
  moduleId: module.id,
  templateUrl: 'book-list.component.html',
  providers: [BookStoreService]
})
export class BookListComponent {
  books: Book[];

  constructor(private bs: BookStoreService) { }

  ngOnInit(){
    this.bs.getAll().subscribe(res => this.books = res);
  }
}
