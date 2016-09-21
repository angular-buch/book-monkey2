import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  myForm: FormGroup;
  authors: FormArray;
  thumbnails: FormArray;
  isUpdatingBook: boolean;

  constructor(
    private fb: FormBuilder,
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isUpdatingBook = false;
    this.initBook();

    this.route.params.subscribe(params => {
      let isbn = params['isbn'];

      if (isbn) {
        this.isUpdatingBook = true;
        let book = this.bs.getSingle(isbn);
        this.initBook(book);
      }
    });
  }

  initBook(book?: Book) {
    if (!book) {
      book = new Book('', '', [''], new Date(), '', 0, [{ url: '', title: '' }], '');
    }

    this.myForm = this.fb.group({
      title: book.title,
      subtitle: book.subtitle,
      isbn: book.isbn,
      description: book.description,
      authors: this.buildAuthorsArray(book.authors),
      thumbnails: this.buildThumbnialsArray(book.thumbnails),
      published: book.published
    });
  }

  buildAuthorsArray(authors): FormArray {
    this.authors = this.fb.array(authors);
    return this.authors;
  }

  buildThumbnialsArray(thumbnails): FormArray {
    this.thumbnails = this.fb.array(
      thumbnails.map(
        t => this.fb.group({
          url: this.fb.control(t.url),
          title: this.fb.control(t.title)
        })
      )
    );
    return this.thumbnails;
  }

  addAuthorControl() {
    this.authors.push(this.fb.control(''));
  }

  addThumbnailControl() {
    this.thumbnails.push(this.fb.group({ url: [''], title: [''] }));
  }

  submitForm() {
    if(this.isUpdatingBook) {
      this.bs.update(this.myForm.value);
      this.router.navigate(['../../books', this.myForm.value.isbn], {relativeTo: this.route});
    } else {
      this.bs.create(this.myForm.value);
      this.myForm.reset();
    }
  }
}
