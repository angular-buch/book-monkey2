import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book, Thumbnail } from '../domain/book';

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.component.html'
})
export class BookDetailsComponent {
  @Input() book: Book;
  @Output() showListEvent:EventEmitter<any> = new EventEmitter();

  getRating(num: number){
    return new Array(num);
  }

  showBookList(){
    this.showListEvent.emit(0);
  }
}
