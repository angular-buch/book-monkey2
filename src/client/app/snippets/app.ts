import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Car} from './my-component';

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
