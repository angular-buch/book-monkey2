import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {BookListItem} from './book-list-item.component';
import {Book, Thumbnail} from '../../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-list',
  directives: [BookListItem, RouterLink],
  templateUrl: '/app/book-monkey/iteration-5/pipes/book-list/book-list.component.html',
  providers: [BookStoreService]
})
export class BookListComponent {
  books: Book[];

  constructor(private bs: BookStoreService) { }

  ngOnInit(){
    //this.bs.getAll().subscribe(res => this.books = res);
    this.tempMockUntilRESTworks();
  }

  tempMockUntilRESTworks(){
    let book1 = new Book(
      '9783864903571',
      'Angular 2',
      ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']
    );
    book1.subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
    book1.thumbnails = [ new Thumbnail('http://goo.gl/nDi0Fc','Buchcover')];

    let book2 = new Book(
      '9783864901546',
      'AngularJS',
      ['Philipp Tarasiewicz', 'Robin Böhm']
    )
    book2.subtitle = 'Eine praktische Einführung';
    book2.thumbnails = [ new Thumbnail('https://goo.gl/Y5lFVE','Buchcover')];

    this.books = [
      book1, book2
    ];
  }
}
