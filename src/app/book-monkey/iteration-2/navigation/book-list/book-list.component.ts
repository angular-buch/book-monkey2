import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {Book} from '../../domain/book';

@Component({
  selector: 'it2-book-list',
  directives: [RouterLink],
  template: `
    <ul>
        <li *ngFor="#book of books; #i=index">
            {{ i+1 }}) <a [routerLink]="['../Details', {isbn: book.isbn}]">{{ book.title }}</a>
            <small>{{ book.isbn }}</small>
        </li>
    </ul>`
})
export class BookListComponent {
  books: Book[];

  constructor() {
      this.books = [
        new Book('999-9-99999-999-9', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']),
        new Book('978-3864901546', 'AngularJS: Eine praktische Einführung', ['Philipp Tarasiewicz', 'Robin Böhm']),
        new Book('978-3898647281', 'JavaScript für Enterprise-Entwickler', ['Oliver Ochs'])
      ];
  }
}
