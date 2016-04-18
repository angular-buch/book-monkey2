import {Component, Input} from 'angular2/core';
import {ControlGroup, ControlArray, FormBuilder, Validators} from 'angular2/common';
import {DateValidator} from '../validators/date.validator'
import {IsbnValidator} from '../validators/isbn.validator'
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

  constructor(private fb: FormBuilder, private bs: BookStoreService) {

    this.myForm = fb.group({
      title:      ['', Validators.required],
      published:  ['', DateValidator.germanDate],
      subtitle:   [''],
      description:[''],
      authors:    fb.array([
                    fb.control('', Validators.required)
                  ]),
      thumbnails: fb.array([
                    fb.group({
                      url:   ['', Validators.required],
                      title: ['']
                    })
                  ]),
      isbn:       ['', Validators.compose([
                    Validators.required,
                    IsbnValidator.isbn
                    /* TODO Async check if isbn exists */
                  ])]
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
    this.bs.create(formData.value).subscribe(res => res);
  }
}
