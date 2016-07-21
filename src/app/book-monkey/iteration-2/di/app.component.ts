import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { BookListComponent } from './book-list/index';
import { BookDetailsComponent } from './book-details/index';
import { Book } from './shared/book';

@Component({
  selector: 'app-root',
  directives: [BookListComponent, BookDetailsComponent, CORE_DIRECTIVES],
  template: `
    <book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></book-list>
    <book-details *ngIf="detailsOn" (showListEvent)="showList()" [book]="book"></book-details>
  `
})
export class AppComponent {
  listOn: boolean = true;
  detailsOn: boolean = false;

  book: Book;

  showList(){
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book){
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
