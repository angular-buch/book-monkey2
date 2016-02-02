import {Component, Input} from 'angular2/core';
import {ControlGroup, ControlArray, Control} from 'angular2/common';
import {Book} from '../../models/book'

@Component({
  selector: 'book-form',
  templateUrl: 'app/components/book-form/book-form.html',
})
export class BookForm {
  @Input()book: Book;
  form: ControlGroup;
  authors: [Control];
  thumbnails: [ControlGroup];

  constructor() {
    this.authors = [ new Control() ];
    this.thumbnails = [ new ControlGroup({
      url: new Control(),
      title: new Control()
    }) ];
    this.form = new ControlGroup({
      title:     new Control(''),
      subtitle:  new Control(''),
      isbn:      new Control(''),
      authors:   new ControlArray( this.authors ),
      thumbnails:   new ControlArray( this.thumbnails ),
      rating:    new Control(''),
      published: new Control('')
    });
  }

  addAuthor(){
    const authors = <ControlArray>this.form.controls['authors'];
    authors.push(new Control());
  }

  addThumbnail(){
    const thumbnails = <ControlArray>this.form.controls['thumbnails'];
    thumbnails.push(new Control());
  }

  submitForm(formData){
    console.log('sanding values:', formData);
  }
}
