import {Component, Input} from 'angular2/core';
import {ControlGroup, ControlArray, FormBuilder} from 'angular2/common';
import {Book} from '../../models/book'

@Component({
  selector: 'book-form',
  templateUrl: 'app/components/book-form/book-form.html'
})
export class BookForm {

  myForm: ControlGroup;
  authorsControlArray: ControlArray;
  thumbnailsControlArray: ControlArray;

  constructor(private fb: FormBuilder) {

    this.myForm = fb.group({
      title: [''],
      subtitle: [''],
      isbn: [''],
      authors: fb.array(['']),
      thumbnails: fb.array([
        fb.group({ url: [''], title: [''] })
      ]),
      rating: [''],
      published: ['']
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
    console.log('submitting values:', formData.value);
  }
}
