import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'isbn'
})
export class Isbn implements PipeTransform {
  transform(value: any): any {
    if(value.length === 10)
      return `ISBN-10 : ${value}`;
    if(value.length === 13)
      return `ISBN-13 : ${value.substr(0,3)}-${value.substr(3)}`;
    return null;
  }
}
