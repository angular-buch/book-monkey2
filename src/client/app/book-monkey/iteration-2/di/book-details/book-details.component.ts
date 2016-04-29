import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Book, Thumbnail} from '../domain/book';

@Component({
  selector: 'book-details',
  moduleId: __moduleName,
  templateUrl: 'book-details.html'
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
