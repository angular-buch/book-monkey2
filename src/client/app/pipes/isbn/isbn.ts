import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'isbn'
})
export class Isbn implements PipeTransform {
  transform(value: string): string {
    console.log(value);

    if(value.length === 10) return value // isbn-10
    if(value.length === 13) { // isbn-13
      var part1 = value.slice(0,2);
      var part2 = value.slice(2,12);
      return part1+'-'+part2;
    }
  }
}
