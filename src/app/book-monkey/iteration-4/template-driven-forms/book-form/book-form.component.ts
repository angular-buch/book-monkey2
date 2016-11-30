import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book, Thumbnail } from '../shared/book';
import { BookFormErrorMessages } from './book-form-error-messages';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  book = Book.empty();
  errors = {};

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.myForm.valueChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    let book = new Book(
      this.myForm.value.isbn,
      this.myForm.value.title,
      this.myForm.value.authors.split(','),
      this.myForm.value.published,
      this.myForm.value.subtitle,
      null,
      [ new Thumbnail(this.myForm.value.thumbnail.url, this.myForm.value.thumbnail.title) ],
      this.myForm.value.description
    );
    this.bs.create(book).subscribe(res => res);
    this.myForm.reset();
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
