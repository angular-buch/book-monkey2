import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  @ViewChild('myForm') currentForm: NgForm;
  book = Book.empty();
  formErrors: Object = {
    'title': '',
    'isbn': '',
    'published': '',
    'author': ''
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
    'author': {
      'required': 'Es muss mindestens ein Autor angegeben werden'
    }
  };

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.currentForm.valueChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    this.bs.create(this.book);
    this.currentForm.reset();
  }

  updateErrorMessages() {
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = this.currentForm.form.get(field);

      if (control && control.dirty && control.invalid) {
        let messages = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
