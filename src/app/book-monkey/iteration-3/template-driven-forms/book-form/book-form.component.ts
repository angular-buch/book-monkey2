import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book, Thumbnail } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  bookForm: NgForm;
  @ViewChild('myForm') currentForm: NgForm;

  constructor(
    private bs: BookStoreService
  ) { }

  ngOnInit() { }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.bookForm) { return; }
    this.bookForm = this.currentForm;
    if (this.bookForm) {
      this.bookForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  submitForm(value: {}) {
    let book = new Book(
      value['isbn'],
      value['title'],
      value['authors'].split(/(?:,| )+/),
      value['published'],
      value['subtitle'],
      null,
      [ value['thumbnails'] ],
      value['description']
    );

    this.bs.create(book);
  }

  onValueChanged(data?: any) {
    if (!this.bookForm) { return; }
    const form = this.bookForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'title': '',
    'isbn': '',
    'published': '',
    'authors': ''
  };

  validationMessages = {
    'title': {
      'required': 'Ein Buchtitel muss angegeben werden',
    },
    'isbn': {
      'required': 'Es muss eine ISBN Nummer angegeben werden',
      'minlength': 'Die ISBN Nummer muss mindestens 10 Zeichen enthalten',
      'maxlength': 'Eine ISBN Nummer kann nicht mehr als 10 Zeichen haben'
    },
    'published': {
      'required': 'Es muss ein Erscheinungsdatum angegeben werden'
    },
    'authors': {
      'required': 'Es muss mindestens ein Autor angegeben werden'
    }
  };
}
