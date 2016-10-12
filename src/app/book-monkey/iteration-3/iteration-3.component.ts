import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui three small ordered steps">
    <a [routerLink]="['template-driven-forms']" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Formulare (Template-Driven)</div>
      </div>
    </a>
    <a [routerLink]="['reactive-forms']" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Formulare (Reactive Forms)</div>
      </div>
    </a>
    <a [routerLink]="['custom-validation']" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Custom Validation</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Iteration3Component { }
