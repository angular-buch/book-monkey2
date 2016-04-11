import {Pipe, PipeTransform} from 'angular2/core';


@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || value.length !== 10 && value.length !== 13) return null;

    let prefix = '';
    if (args[0]) { // add prefix?
      prefix = (value.length === 10) ? 'ISBN-10: ' : 'ISBN-13: ';
    }

    if (value.length === 10) return prefix + value;
    else return `${prefix}${value.substr(0,3)}-${value.substr(3)}`;
  }

}
