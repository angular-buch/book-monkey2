import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  template: `
    <bm-book-list *ngIf="listOn" <!--TEX:\bfs-->(showDetailsEvent)="showDetails(\$event)"<!--TEX:\bfe-->></bm-book-list>
    <bm-book-details *ngIf="detailsOn" <!--TEX:\bfs-->(showListEvent)="showList()" [book]="book"<!--TEX:\bfe-->></bm-book-details>
  `
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  book: Book;
  /*TEX:\bfs*/
  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }/*TEX:\bfe*/
}
