import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {Book} from './domain/book';

@Component({
  selector: 'book-monkey-app',
  directives: [BookListComponent, BookDetailsComponent, CORE_DIRECTIVES],
  template: `
    <book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></book-list>
    <book-details *ngIf="detailsOn" (showListEvent)="showList()" [book]="book"></book-details>
  `
})
export class BookMonkeyApp {
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
