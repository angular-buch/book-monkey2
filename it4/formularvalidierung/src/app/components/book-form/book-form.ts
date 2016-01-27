import { Component, Input } from 'angular2/core';
import { Control, ControlGroup, Validators } from 'angular2/common';
import DateValidator from '../../validators/date.validator'
import IsbnValidator from '../../validators/isbn.validator'
import RatingValidator from '../../validators/rating.validator'
import Book from '../../models/book'

@Component({
  selector: 'book-form',
  templateUrl: 'app/components/book-form/book-form.html',
})
export default class BookForm {
  @Input()book: Book;
  cg: ControlGroup;

  constructor() {
    this.cg = new ControlGroup({
      title:     new Control('', Validators.required),
      subtitle:  new Control(''),
      isbn:      new Control('', Validators.compose([
                    Validators.required,
                    IsbnValidator.isbn
                    /*ASync check if isbn exists*/
                 ])),
      authors:   new Control('', Validators.required),
      rating:    new Control('', RatingValidator.rating),
      published: new Control('', DateValidator.germanDate)
    });
  }
}
