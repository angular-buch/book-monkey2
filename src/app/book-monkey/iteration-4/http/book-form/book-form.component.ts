import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';
import { DateValidator } from '../validators/date.validator';
import { IsbnValidator } from '../validators/isbn.validator';
import { Book } from '../domain/book';
import { BookStoreService } from '../services/books/book-store.service';

@Component({
  selector: 'book-form',
  moduleId: module.id,
  templateUrl: 'book-form.component.html',
  providers: [BookStoreService],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class BookFormComponent implements OnInit {
  myForm: FormGroup;
  authorsFormArray: FormArray;
  thumbnailsFormArray: FormArray;
  isUpdatingBook: boolean;

  constructor(
    private fb: FormBuilder, 
    private bs: BookStoreService,
    private route: ActivatedRoute
  ) {
    this.isUpdatingBook = false;
    this.initBook();
  }

  ngOnInit():void {
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
        Validators.required
        /*
        TODO: Add IsbnValidator.isbn
        TODO: Add Async check if isbn exists
        */
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
    this.authorsFormArray = <FormArray>this.myForm.controls['authors'];
    this.thumbnailsFormArray = <FormArray>this.myForm.controls['thumbnails'];
  }

  addAuthorControl(){
    this.authorsFormArray.push(this.fb.control(''));
  }

  addThumbnailControl(){
    this.thumbnailsFormArray.push(this.fb.group({url: [''], title: ['']}));
  }

  submitForm(formData){
    this.isUpdatingBook 
      ? this.bs.update(formData.value)
               .subscribe(res => res)
      : this.bs.create(formData.value)
               .subscribe(res => res)
  }
}