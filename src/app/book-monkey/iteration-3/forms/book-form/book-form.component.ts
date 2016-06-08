import { Component, Input } from '@angular/core';
import { OnActivate, RouteSegment } from '@angular/router';
import { ControlGroup, ControlArray, FormBuilder } from '@angular/common';
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
  isUpdatingBook: boolean;

  constructor(private fb: FormBuilder, private bs: BookStoreService) {
    this.isUpdatingBook = false;
    this.myForm = this.fb.group({ //create the form model
      title:       [],
      subtitle:    [],
      isbn:        [],
      description: [],
      authors:      this.fb.array(['']),
      thumbnails:   this.fb.array([
        this.fb.group({url: '', title: ''})
      ]),
      published: []
    });
    
    // this allows us to manipulate the form at runtime
    this.authorsControlArray = <ControlArray>this.myForm.controls['authors'];
    this.thumbnailsControlArray = <ControlArray>this.myForm.controls['thumbnails'];
  }

  routerOnActivate(curr: RouteSegment):void {
    var isbn = curr.getParam('isbn');
    
    if(isbn) {
      this.isUpdatingBook = true;
      let book = this.bs.getSingle(isbn);
      this.initBook(book)
    }
  }

  initBook(book:Book){
    this.myForm = this.fb.group({
      title:       [book.title],
      subtitle:    [book.subtitle],
      isbn:        [book.isbn],
      description: [book.description],
      authors:      this.fb.array(book.authors),
      thumbnails:   this.fb.array(
        book.thumbnails.map(
          t => this.fb.group({
            url: this.fb.control(t.url),
            title: this.fb.control(t.title)
          })
        )
      ),
      published: [book.published]
    });
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