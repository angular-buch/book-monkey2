import {Component} from 'angular2/core';
import {Book, Thumbnail} from '../../domain/book';

@Component({
  selector: 'book-list',
  moduleId: module.id,
  templateUrl: 'book-list.component.html'
})
export class BookListComponent {
  books: Book[];

  constructor() {

     var book1 = new Book(
      '9783864903571',
      'Angular 2',
      ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']
    );
    book1.rating = 5;
    book1.subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
    book1.thumbnails = [new Thumbnail('http://goo.gl/nDi0Fc','Buchcover')];

    var book2 = new Book(
      '9783864901546',
      'AngularJS',
      ['Philipp Tarasiewicz', 'Robin Böhm']
    )
    book2.rating = 5;
    book2.subtitle = 'Eine praktische Einführung';
    book2.thumbnails = [new Thumbnail('https://goo.gl/Y5lFVE','Buchcover')];

    this.books = [book1, book2];
  }
}
