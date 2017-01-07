import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui one small ordered steps">
    <a routerLink="http" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Http</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Iteration3Component { }
