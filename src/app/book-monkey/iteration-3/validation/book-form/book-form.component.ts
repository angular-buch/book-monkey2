import { Component, Input } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { ControlGroup, ControlArray, FormBuilder, Validators } from '@angular/common';
import { DateValidator } from '../validators/date.validator'
import { IsbnValidator } from '../validators/isbn.validator'
import { Book } from '../domain/book'
import { BookStoreService } from '../services/books/book-store.service'

@Component({
  selector: 'book-form',
  moduleId: module.id,
  templateUrl: 'book-form.component.html',
  providers: [BookStoreService]
})
export class BookFormComponent implements OnActivate{
  myForm: ControlGroup;
  authorsControlArray: ControlArray;
  thumbnailsControlArray: ControlArray;

  book: Book;
  isUpdatingBook: boolean;

  constructor(private fb: FormBuilder, private bs: BookStoreService) {
    this.book = new Book('', '', [], new Date());
    this.isUpdatingBook = false;
  }

  routerOnActivate(curr: RouteSegment):void {
    var isbn = curr.getParam('isbn');
     

    if(isbn) {
      this.isUpdatingBook = true;
      this.book = this.bs.getSingle(isbn);
    }

    this.myForm = this.fb.group({
      title: [this.book.title, Validators.required],
      subtitle: [this.book.subtitle],
      isbn: [this.book.isbn, Validators.compose([
        Validators.required,
        IsbnValidator.isbn
        /* TODO Async check if isbn exists */
      ])],
      description: [this.book.description],
      authors: this.fb.array(this.book.authors, Validators.required),
      thumbnails: this.fb.array(
        this.book.thumbnails.map(
          t => this.fb.group({
            url: this.fb.control(t.url, Validators.required),
            title: this.fb.control(t.title)
          })
        )
      ),
      published: [this.book.published] // , DateValidator.germanDate
    });

    // this allows us to manipulate the form at runtime
    this.authorsControlArray = <ControlArray>this.myForm.controls['authors'];
    this.thumbnailsControlArray = <ControlArray>this.myForm.controls['thumbnails'];
  }

  addAuthorControl(){
    this.authorsControlArray.push(this.fb.control(''));
  }

  addThumbnailControl(){
    this.thumbnailsControlArray.push(this.fb.group({url: [''], title: ['']}));
  }

  submitForm(formData){
    this.isUpdatingBook 
      ? this.bs.update(formData) 
      : this.bs.create(formData);
  }
}

