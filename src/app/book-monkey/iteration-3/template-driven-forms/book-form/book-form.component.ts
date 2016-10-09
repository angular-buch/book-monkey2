import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';
import { BookFormErrorMessages } from './book-form-error-messages';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  @ViewChild('myForm') currentForm: NgForm;
  book = Book.empty();
  errors = {};

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.currentForm.valueChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    this.bs.create(this.book);
    this.currentForm.reset();
  }

  updateErrorMessages() {

    this.errors = {};

    for (let message of BookFormErrorMessages) {
      let control = this.currentForm.form.get(message.forControl);
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
