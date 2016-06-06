import { Control } from '@angular/common';
import { ValidationResult } from './validation-result';

export class IsbnValidator {
  static isbn(control: Control): ValidationResult {
    let isolatedNumbers = control.value.replace(/\D/g, '');
    let isbnPattern = /(^\d{10}$)|(^\d{13}$)/g;
    if (!isolatedNumbers.match(isbnPattern))
      return { "isbn": true };
    return null;
  }
}
