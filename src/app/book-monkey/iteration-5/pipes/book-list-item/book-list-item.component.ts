import { Component, Input } from '@angular/core';

import { Book } from '../shared/book';
import { IsbnPipe } from '../shared/isbn-pipe';

@Component({
  selector: 'a.book-list-item',
  templateUrl: 'book-list-item.component.html'
})

export class BookListItemComponent {
  @Input() book: Book;
}
