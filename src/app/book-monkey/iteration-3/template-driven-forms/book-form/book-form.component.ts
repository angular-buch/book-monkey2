import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';
import { Validation } from './validation';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  @ViewChild('myForm') currentForm: NgForm;
  book = Book.empty();
  validation = new Validation();

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.currentForm.valueChanges.subscribe(() => this.updateErrorMessages());
    this.validation = new Validation();
  }

  submitForm() {
    this.bs.create(this.book);
    this.currentForm.reset();
  }

  updateErrorMessages() {
    for (let field in this.validation) {
      this.validation[field].error = '';     
      let control = this.currentForm.form.get(field);
      
      if (control && control.dirty && control.invalid) {
        for (let key in control.errors) {
          this.validation[field].error = this.validation[field].messages[key];
        }
      }
    };
  }
}
