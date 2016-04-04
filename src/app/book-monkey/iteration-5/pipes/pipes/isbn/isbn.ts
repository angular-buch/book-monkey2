import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'isbn'
})
export class Isbn implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
