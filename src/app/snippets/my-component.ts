import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `<button (click)="raiseEvent()">Damage!</button>`,
})
export class MyComponent {
  @Output() onRaisedEvent = new EventEmitter<string>();

  raiseEvent() {
    this.onRaisedEvent.emit('event!');
  }
}
