import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Book } from '../shared/book'
import { BookStoreService } from '../shared/book-store.service'

@Component({
  selector: 'book-form',
  moduleId: module.id,
  templateUrl: 'book-form.component.html',
  providers: [BookStoreService],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class BookFormComponent implements OnInit {
  myForm: FormGroup;
  authorsControlArray: FormArray;
  thumbnailsControlArray: FormArray;
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
        let book = this.bs.getSingle(isbn);
        this.initBook(book)
      }
    });
  }

  initBook(book?:Book){
    if(!book) book = new Book('', '', [''], new Date(), '', 0, [{url:'', title: ''}], '');

    this.myForm = this.fb.group({
      title:       book.title,
      subtitle:    book.subtitle,
      isbn:        book.isbn,
      description: book.description,
      authors:      this.fb.array(book.authors),
      thumbnails:   this.fb.array(
        book.thumbnails.map(
          t => this.fb.group({
            url: this.fb.control(t.url),
            title: this.fb.control(t.title)
          })
        )
      ),
      published: book.published
    });

    // this allows us to manipulate the form at runtime
    this.authorsControlArray = <FormArray>this.myForm.controls['authors'];
    this.thumbnailsControlArray = <FormArray>this.myForm.controls['thumbnails'];
  }

  addAuthorControl(){
    this.authorsControlArray.push(this.fb.control(''));
  }

  addThumbnailControl(){
    this.thumbnailsControlArray.push(this.fb.group({url: [''], title: ['']}));
  }

  submitForm(formData){
    this.isUpdatingBook 
      ? this.bs.update(formData.value) 
      : this.bs.create(formData.value);
  }
}