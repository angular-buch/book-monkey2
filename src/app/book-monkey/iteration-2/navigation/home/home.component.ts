import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template: `<h1>Home</h1>
  Das ist der BookMonkey. Wir können hier <a [routerLink]="['../Books']">Bücher verwalten</a>.`,
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
  constructor() { }
}
