import { FormControl } from '@angular/forms';

export class BookValidators {
  static isbn(control: FormControl): { [error: string]: any } {
    let isolatedNumbers = control.value.replace(/[-]/g, '');
    const isbnPattern = /(^\d{10}$)|(^\d{13}$)/g;
    return isbnPattern.test(isolatedNumbers) ? null : {
      isbnFormat: { valid: false }
    };
  }
}


