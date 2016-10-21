import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui two small ordered steps">
    <a routerLink="di" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Dependency-Injection</div>
      </div>
    </a>
    <a routerLink="navigation" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Navigation</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `,
})
export class Iteration2Component { }
