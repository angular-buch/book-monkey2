import {Component, Input} from '@angular/core';
import {RouteData, UrlSegment} from '@angular/router';
import {ControlGroup, ControlArray, FormBuilder} from '@angular/common';
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

  constructor(private fb: FormBuilder, private routeData: RouteData, private UrlSegment: UrlSegment, private bs: BookStoreService) {
    let book = {
      title: '',
      subtitle: '',
      isbn: '',
      description: '',
      authors: [''],
      thumbnails:[{url:'', title:''}],
      published: new Date()
    };

    if(routeData.get('mode') === 'update') book = bs.getSingle(UrlSegment.segment('isbn'));

    this.myForm = this.fb.group({
      title: [book.title],
      subtitle: [book.subtitle],
      isbn: [book.isbn],
      description: [book.description],
      authors: this.fb.array(book.authors),
      thumbnails: this.fb.array(
        book.thumbnails.map(
          t => this.fb.group({
            url: this.fb.control(t.url),
            title: this.fb.control(t.title)
          })
        )
      ),
      published: [book.published]
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
    this.routeData.get('mode') === 'update' ? this.bs.update(formData) : this.bs.create(formData);
  }
}
