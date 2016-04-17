import {Component, Input} from 'angular2/core';
import {RouteData, RouteParams} from 'angular2/router';
import {ControlGroup, ControlArray, FormBuilder} from 'angular2/common';
import {Book} from '../../domain/book'
import {BookStoreService} from '../services/books/book-store.service'

@Component({
  selector: 'book-form',
  moduleId: module.id,
  templateUrl: 'form.component.html',
  providers: [BookStoreService]
})
export class FormComponent {
  myForm: ControlGroup;
  authorsControlArray: ControlArray;
  thumbnailsControlArray: ControlArray;

  constructor(private fb: FormBuilder, private routeData: RouteData, private routeParams: RouteParams, private bs: BookStoreService) {
    var formData;

    if(routeData.get('mode') === 'edit'){
      var isbn = routeParams.get('isbn');
      var book = bs.getSingle(isbn);
      formData = this.initFormDataEdit(book);
    }else{
      formData = this.initFormDataAdd();
    }

    this.myForm = this.fb.group(formData);

    // this allows us to manipulate the form at runtime
    this.authorsControlArray = <ControlArray>this.myForm.controls['authors'];
    this.thumbnailsControlArray = <ControlArray>this.myForm.controls['thumbnails'];
  }


  initFormDataAdd(){
    return {
      title: [''],
      subtitle: [''],
      isbn: [''],
      description: [''],
      authors: this.fb.array(['']),
      thumbnails: this.fb.array([
        this.fb.group({ url: [''], title: [''] })
      ]),
      rating: [''],
      published: ['']
    }
  }


  initFormDataEdit(book: Book){
    return {
      title: [book.title],
      subtitle: [book.subtitle],
      isbn: [book.isbn],
      description: [book.description],
      authors: this.fb.array(book.authors),
      thumbnails: this.fb.array(
        book.thumbnails.map(
          t => this.fb.group({ url: [t.url], title: [t.title] })
        )
      ),
      rating: [book.rating],
      published: [book.published]
    }
  }


  addAuthorControl(){
    this.authorsControlArray.push(this.fb.control(''));
  }

  addThumbnailControl(){
    this.thumbnailsControlArray.push(this.fb.group({url: [''], title: ['']}));
  }

  submitForm(formData){
    console.log('submitting values:', formData.value);
  }
}
