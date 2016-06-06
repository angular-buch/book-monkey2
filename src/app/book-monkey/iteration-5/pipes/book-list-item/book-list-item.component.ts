import { Component, Input } from '@angular/core';
import { Book } from '../domain/book';
import { IsbnPipe } from '../pipes/isbn-pipe/isbn-pipe';

@Component({
  selector: 'a.book-list-item',
  moduleId: module.id,
  templateUrl: 'book-list-item.component.html',
  pipes: [IsbnPipe]
})

export class BookListItemComponent {
  @Input() book: Book;
}
