import {Component} from 'angular2/core';
import BookDetails from './components/book-details/book-details';

@Component({
  selector: 'book-monkey',
  template: `<book-details></book-details> :-(`
})
export default class BookMonkey {
  constructor() { }
}
