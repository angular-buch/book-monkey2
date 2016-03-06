import {Component} from 'angular2/core';
import {BookForm} from './components/book-form/book-form';
import {Book} from './models/book';

@Component({
  selector: 'book-monkey-app',
  directives: [BookForm],
  template: `Dieses Beispiel demonstriert die Validierung eines Formulars.
  Weitere Bestandteile der BookMonkey-App sind aus Gründen der Übersichtlichkeit nicht Bestandteil dieser Demo.
  <hr>
  <book-form [book]="book"></book-form>`
})
export default class BookMonkeyApp {
  private book: Book;

  constructor(){
    this.book = new Book('3243453245', '', []) // this book has invalid values
  }
}
