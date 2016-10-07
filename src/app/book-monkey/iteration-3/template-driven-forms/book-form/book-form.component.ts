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

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.currentForm.valueChanges.subscribe(data =>
      this.updateErrorMessage());
  }

  submitForm() { this.bs.create(this.book); }

  updateErrorMessage() {
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      const control = this.currentForm.form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
}
