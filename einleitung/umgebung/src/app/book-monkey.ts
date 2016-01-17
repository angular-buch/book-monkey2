import {Component} from 'angular2/core';


@Component({
  selector: 'book-monkey-app',
  providers: [],
  templateUrl: 'app/book-monkey.html',
  directives: [],
  pipes: []
})
export class BookMonkeyApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
