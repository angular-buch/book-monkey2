import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {

  transform(value: any, addPrefix: any): any {
    return null;
  }

}
