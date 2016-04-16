import {Component} from 'angular2/core';
import {BookDetailsComponent} from './book-details/book-details.component';

@Component({
  selector: 'book-monkey',
  directives: [BookDetailsComponent],
  template: `<book-details></book-details>`
})
export class BookMonkeyApp { }
