import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';
import { validateIsbn } from '../shared/isbn.validator';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'book-form',
  moduleId: module.id,
  templateUrl: 'book-form.component.html',
  providers: [BookStoreService],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class BookFormComponent implements OnInit {
  myForm: FormGroup;
  authors: FormArray;
  thumbnails: FormArray;
  isUpdatingBook: boolean;

  constructor(
    private fb: FormBuilder, 
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit():void {
    this.isUpdatingBook = false;
    this.initBook();

    this.route.params.subscribe(params => {
      var isbn = params['isbn'];
    
      if(isbn) {
        this.isUpdatingBook = true;
        this.bs.getSingle(isbn)
          .subscribe(b => this.initBook(b));
      }
    });
  }

initBook(book?:Book){
    if(!book) book = new Book('', '', [''], new Date(), '', 0, [{url:'', title: ''}], '');

    this.myForm = this.fb.group({
      title: [book.title, Validators.required],
      subtitle: [book.subtitle],
      isbn: [book.isbn, Validators.compose([
        Validators.required,
        validateIsbn
      ])],
      description: [book.description],
      authors:     this.buildAuthorsArray(book.authors),
      thumbnails:  this.buildThumbnialsArray(book.thumbnails),
      published: [
        book.published, 
        Validators.pattern('([1-9]|0[1-9]|(1|2)[0-9]|3[0-1])\.([1-9]|0[1-9]|1[0-2])\.[0-9]{4}')
      ]
     });
  }

  buildAuthorsArray(authors): FormArray {
    this.authors = this.fb.array(authors, Validators.required);
    return this.authors;
  }

  buildThumbnialsArray(thumbnails): FormArray {
    this.thumbnails = this.fb.array(
      thumbnails.map(
        t => this.fb.group({
          url: this.fb.control(t.url, Validators.required),
          title: this.fb.control(t.title)
        })
      )
    );
    return this.thumbnails;
  }

  addAuthorControl(){
    this.authors.push(this.fb.control(''));
  }

  addThumbnailControl(){
    this.thumbnails.push(this.fb.group({url: [''], title: ['']}));
  }

  submitForm(formData){
    this.isUpdatingBook 
      ? this.bs.update(formData.value)
               .subscribe(res => res)
      : this.bs.create(formData.value)
               .subscribe(res => res)
  }
}