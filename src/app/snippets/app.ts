import { Component } from '@angular/core';
import { MyComponent } from './my-component';

@Component({
  selector: 'app',
  template: `
    <my-component (onRaisedEvent)="handle($event)"></my-component>
  `
})
class App {
  handle(message:string) {
    console.log("Message:", message);
  }
}

// TDODO! (or not)
//bootstrap(App);
