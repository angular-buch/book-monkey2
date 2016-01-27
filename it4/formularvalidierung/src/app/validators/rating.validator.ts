import { Control } from 'angular2/common';
import { ValidationResult } from './validation-result';

export default class RatingValidator {
  static rating(control: Control): ValidationResult {

    let value = parseInt(control.value)
    if (!(value <= 5 && value > 0))
      return { "rating": true };

    return null;
  }
}