import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';
import { BookFactory } from '../shared/book-factory';
import { BookStoreService } from '../shared/book-store.service';
import { BookFormErrorMessages } from './book-form-error-messages';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  book = BookFactory.empty();
  errors = {};

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.myForm.valueChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    this.book.authors = this.myForm.value.authors.split(',');
    this.book.thumbnails = [{
      url: this.myForm.value.thumbnail.url,
      title: this.myForm.value.thumbnail.title
    }];

    let book = BookFactory.fromObject(this.book);

    this.bs.create(book).subscribe(res => {
      this.myForm.reset();
    });
  }

  updateErrorMessages() {
    this.errors = {};
    for (let message of BookFormErrorMessages) {
      let control = this.myForm.form.get(message.forControl);
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
