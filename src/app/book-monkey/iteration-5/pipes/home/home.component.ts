import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template: `
  <div class="ui container">
    <h1>Home</h1>
    <p>Das ist der BookMonkey.</p>
    <div [routerLink]="['../Books']" class="ui red button">
      Buchliste ansehen
      <i class="right arrow icon"></i>
    </div>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent { }
