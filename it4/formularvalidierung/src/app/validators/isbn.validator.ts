import { Control } from 'angular2/common';
import { ValidationResult } from './validation-result';

export default class IsbnValidator {
  static isbn(control: Control): ValidationResult {
    let isbnPattern = /^(?=[-0-9xX ]{13}$)(?:[0-9]+[- ]){3}[0-9]*[xX0-9]$/;

    if (!control.value.match(isbnPattern))
      return { "isbn": true };

    return null;
  }
}