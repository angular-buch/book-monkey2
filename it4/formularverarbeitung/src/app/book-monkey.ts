import {Component} from 'angular2/core';
import {BookForm} from './components/book-form/book-form';

@Component({
  selector: 'book-monkey-app',
  directives: [BookForm],
  templateUrl: 'app/book-monkey.html'
})
export class BookMonkeyApp { }
