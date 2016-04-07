import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Car} from './car';

@Component({
  selector: 'app',
  directives: [Car],
  template: `<car id="car1" (damaged)="report($event)"></car>`
})
class App {
  report(damage:string) {
    console.log("Damage:", damage);
  }
}

bootstrap(App);
