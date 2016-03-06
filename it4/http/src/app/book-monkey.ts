import {Component} from 'angular2/core';
import {BookList} from './components/book-list/book-list';

@Component({
  selector: 'book-monkey-app',
  template: `Dieses Beispiel demonstriert die Integration eines Services mittels DI.
  Weitere Bestandteile der BookMonkey-App sind aus Gründen der Übersichtlichkeit nicht Bestandteil dieser Demo.
  <hr>
  <book-list></book-list>`,
  directives: [BookList]
})
export class BookMonkeyApp { }
