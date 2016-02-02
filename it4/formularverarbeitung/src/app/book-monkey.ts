import {Component} from 'angular2/core';
import {BookForm} from './components/book-form/book-form';
import {Book} from './models/book';

@Component({
  selector: 'book-monkey-app',
  directives: [BookForm],
  templateUrl: 'app/book-monkey.html'
})
export class BookMonkeyApp {
  private book: Book;
}
