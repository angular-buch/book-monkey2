import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'car',
  template: `<button (click)="reportDamage()">Damage!</button>`,
})
export class Car {
  @Input() id:string;
  @Output() damaged:EventEmitter<string> = new EventEmitter();

  reportDamage() {
    this.damaged.emit(this.id);
  }
}
