import { Component } from 'angular2/core';
import BookList from './components/book-list/book-list';

@Component({
  selector: 'book-monkey-app',
  directives: [BookList],
  template: `<h1>BookMonkey</h1>
  <book-list></book-list>`
})

export default class BookMonkeyApp {
  constructor() { }
}
