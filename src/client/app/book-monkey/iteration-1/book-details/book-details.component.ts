import {Component} from 'angular2/core';
import {Book, Thumbnail} from '../domain/book';

@Component({
  selector: 'book-details',
  templateUrl: '/app/book-monkey/iteration-1/book-details/book-details.html'
})
export class BookDetailsComponent {
  book: Book;

  constructor() {
    this.book = new Book('9783864903571', 'Angular 2', [
      'Johannes Hoppe',
      'Danny Koppenhagen',
      'Ferdinand Malcher',
      'Gregor Woiwode'
    ]);
    this.book.subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
    this.book.published = new Date(2016,4,26);
    this.book.rating = 5;
    this.book.description = 'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2 und führt Sie anhand eines anspruchsvollen Beispielprojekts schrittweise an die Entwicklung mit Googles clientseitigem Webframework heran. Lernen Sie dabei Konzepte und Techniken, mit denen Sie strukturierte und modularisierte SinglePageAnwendungen entwickeln. Darüber hinaus lernen Sie Werkzeuge wie Yo, Gulp, Bower, Karma und Protractor zu verwenden und in Ihren Workflow zu integrieren.';
    this.book.thumbnails = [
      new Thumbnail('http://goo.gl/nDi0Fc','Buchcover'),
      new Thumbnail('https://goo.gl/LnYTQD','Angular 2 Logo')
    ];
  }
}
