import {Pipe, PipeTransform} from 'angular2/core';


@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    return null;
  }

}
