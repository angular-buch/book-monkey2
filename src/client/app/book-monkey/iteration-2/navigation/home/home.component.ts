import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

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
