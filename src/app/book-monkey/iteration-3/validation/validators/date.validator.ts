import {Control} from 'angular2/common';
import {ValidationResult} from './validation-result';

export class DateValidator {
  static germanDate(control: Control): ValidationResult {
    let germanDatePattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;

    if (!control.value.match(germanDatePattern))
      return { "germanDate": true };

    return null;
  }
}
