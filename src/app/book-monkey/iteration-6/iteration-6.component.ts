import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui two small ordered steps">
    <a routerLink="modules" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Module</div>
      </div>
    </a>
    <a routerLink="modules" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">// TODO</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Iteration6Component { }
