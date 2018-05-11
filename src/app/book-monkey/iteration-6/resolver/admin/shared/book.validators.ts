import { FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BookStoreService } from '../../shared/book-store.service';

export class BookValidators {

  static isbnFormat(control: FormControl): { [error: string]: any } {
    if (!control.value) { return null; }

    const isolatedNumbers = control.value.replace(/-/g, '');
    const isbnPattern = /(^\d{10}$)|(^\d{13}$)/;
    return isbnPattern.test(isolatedNumbers) ? null : {
      isbnFormat: { valid: false }
    };
  }

  static atLeastOneAuthor(controlArray: FormArray): { [error: string]: any } {
    const check = controlArray.controls.some(el => {
      return (el.value) ? true : false;
    });
    return check ? null : {
      atLeastOneAuthor: { valid: false }
    };
  }

  static isbnExists(bs: BookStoreService) {
    return function(control: FormControl): Observable<{ [error: string]: any }> {
      return bs.check(control.value).pipe(
        map(exists => (exists === false) ? null : {
            isbnExists: { valid: false }
        })
      );
    };
  }
}
