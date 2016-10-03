import { Component } from '@angular/core';

@Component({
  template: `
  <div class="ui container">
    <h1>Home</h1>
    <p>Das ist der BookMonkey.</p>
    <a [routerLink]="['../books']" class="ui red button">
      Buchliste ansehen
      <i class="right arrow icon"></i>
    </a>
  </div>
  `
})
export class HomeComponent { }
