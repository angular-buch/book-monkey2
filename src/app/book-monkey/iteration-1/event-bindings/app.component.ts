import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  template: `
    <bm-book-list *ngIf="listOn" <TEX>\bfseries (showDetailsEvent)="showDetails(\$event)"</TEX>></bm-book-list>
    <bm-book-details *ngIf="detailsOn" <TEX>\bfseries (showListEvent)="showList()" [book]="book"</TEX>></bm-book-details>
  `
})
export class AppComponent {
  listOn = true;
  detailsOn = false;

  book: Book;

<TEX>\boldline</TEX>  showList() {
<TEX>\boldline</TEX>    this.listOn = true;
<TEX>\boldline</TEX>    this.detailsOn = false;
<TEX>\boldline</TEX>  }

<TEX>\boldline</TEX>  showDetails(book: Book) {
<TEX>\boldline</TEX>    this.book = book;
<TEX>\boldline</TEX>    this.listOn = false;
<TEX>\boldline</TEX>    this.detailsOn = true;
<TEX>\boldline</TEX>  }
}
