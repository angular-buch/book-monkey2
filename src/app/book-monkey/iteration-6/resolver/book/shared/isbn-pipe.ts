import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: any, addPrefix: boolean): string {
    if (!value || value.length !== 10 && value.length !== 13) {
      return null;
    }

    let prefix = '';
    if (addPrefix) { // add prefix?
      prefix = (value.length === 10) ? 'ISBN-10: ' : 'ISBN-13: ';
    }

    if (value.length === 10) {
      return prefix + value;
    } else {
      return `${prefix}${value.substr(0, 3)}-${value.substr(3)}`;
    }
  }
}
