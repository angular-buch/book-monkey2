import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui two small ordered steps">
    <a [routerLink]="['pipes']" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Pipes</div>
      </div>
    </a>
    <a [routerLink]="['directives']" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Direktiven</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Iteration5Component { }
