import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'app-root',
  template: `
    <book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></book-list>
    <book-details *ngIf="detailsOn" (showListEvent)="showList()" [book]="book"></book-details>
  `
})
export class AppComponent {
  listOn: boolean = true;
  detailsOn: boolean = false;

  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
