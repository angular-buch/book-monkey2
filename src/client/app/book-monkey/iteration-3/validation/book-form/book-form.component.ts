import {Component, Input} from 'angular2/core';
import {RouteData, RouteParams} from 'angular2/router';
import {ControlGroup, ControlArray, FormBuilder, Validators} from 'angular2/common';
import {DateValidator} from '../validators/date.validator'
import {IsbnValidator} from '../validators/isbn.validator'
import {Book} from '../domain/book'
import {BookStoreService} from '../services/books/book-store.service'

@Component({
  selector: 'book-form',
  moduleId: module.id,
  templateUrl: 'book-form.component.html',
  providers: [BookStoreService]
})
export class BookFormComponent {
  myForm: ControlGroup;
  authorsControlArray: ControlArray;
  thumbnailsControlArray: ControlArray;

  constructor(private fb: FormBuilder, private routeData: RouteData, private routeParams: RouteParams, private bs: BookStoreService) {
    let book = {
      title: '',
      subtitle: '',
      isbn: '',
      description: '',
      authors: [''],
      thumbnails:[{url:'', title:''}],
      published: new Date()
    };

    if(routeData.get('mode') === 'update') book = bs.getSingle(routeParams.get('isbn'));

    this.myForm = this.fb.group({
      title: [book.title, Validators.required],
      subtitle: [book.subtitle],
      isbn: [book.isbn, Validators.compose([
        Validators.required,
        IsbnValidator.isbn
        /* TODO Async check if isbn exists */
      ])],
      description: [book.description],
      authors: this.fb.array(book.authors, Validators.required),
      thumbnails: this.fb.array(
        book.thumbnails.map(
          t => this.fb.group({
            url: this.fb.control(t.url, Validators.required),
            title: this.fb.control(t.title)
          })
        )
      ),
      published: [book.published] // , DateValidator.germanDate
    });

    // this allows us to manipulate the form at runtime
    this.authorsControlArray = <ControlArray>this.myForm.controls['authors'];
    this.thumbnailsControlArray = <ControlArray>this.myForm.controls['thumbnails'];
  }

  addAuthorControl(){
    this.authorsControlArray.push(this.fb.control(''));
  }

  addThumbnailControl(){
    this.thumbnailsControlArray.push(this.fb.group({ url: [''], title: ['']} ));
  }

  submitForm(formData){
    this.routeData.get('mode') === 'update' ? this.bs.update(formData) : this.bs.create(formData);
  }
}
