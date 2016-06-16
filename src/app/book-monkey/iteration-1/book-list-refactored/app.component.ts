import { Component } from '@angular/core';
import { BookListComponent } from './book-list/index';

@Component({
  selector: 'app-root',
  directives: [BookListComponent],
  template: `<book-list></book-list>`
})
export class AppComponent { }
