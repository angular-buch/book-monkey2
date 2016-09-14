import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'book-details',
  templateUrl: 'book-details.component.html'
})
export class BookDetailsComponent {
  @Input() book: Book;
  @Output() showListEvent: EventEmitter<any> = new EventEmitter();

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit(null);
  }
}
