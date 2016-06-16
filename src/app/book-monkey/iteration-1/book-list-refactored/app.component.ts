import { Component } from '@angular/core';
import { BookListComponent } from './book-list/index';

@Component({
  selector: 'book-monkey-app',
  directives: [BookListComponent],
  template: `<book-list></book-list>`
})
export class BookMonkeyAppComponent { }
