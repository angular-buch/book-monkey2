import { FormControl } from '@angular/forms';

export function validateIsbn(control: FormControl): {[error: string]:any} {
  let isolatedNumbers = control.value.replace(/\D/g, '');
  let isbnPattern = /(^\d{10}$)|(^\d{13}$)/g;
  
  return isbnPattern.test(isolatedNumbers) ? null : {
    validateIsbn: { valid: false }
  }
}