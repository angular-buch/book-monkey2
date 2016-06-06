import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { MyComponent } from './my-component';

@Component({
  selector: 'app',
  directives: [MyComponent],
  template: `
    <my-component (onRaisedEvent)="handle($event)"></my-component>
  `
})
class App {
  handle(message:string) {
    console.log("Message:", message);
  }
}

bootstrap(App);
