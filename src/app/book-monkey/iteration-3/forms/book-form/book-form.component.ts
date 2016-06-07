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

  book: Book;

  constructor(private fb: FormBuilder, private bs: BookStoreService) {
    this.book = new Book('', '', [], new Date());    
  }

  routerOnActivate(curr: RouteSegment):void {
    var isbn = curr.getParam('isbn');
    
    if(isbn) {
      this.book = this.bs.getSingle(isbn);
    }

    this.myForm = this.fb.group({
      title:       [this.book.title],
      subtitle:    [this.book.subtitle],
      isbn:        [this.book.isbn],
      description: [this.book.description],
      authors:      this.fb.array(this.book.authors),
      thumbnails:   this.fb.array(
        this.book.thumbnails.map(
          t => this.fb.group({
            url: this.fb.control(t.url),
            title: this.fb.control(t.title)
          })
        )
      ),
      published: [this.book.published]
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
    // this.UrlSegment.parameters['mode'] === 'update' ? this.bs.update(formData) : this.bs.create(formData);
  }
}
