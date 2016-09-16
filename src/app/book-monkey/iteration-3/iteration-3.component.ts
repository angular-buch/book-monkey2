import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui two small ordered steps">
    <a [routerLink]="['forms']" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Formulare</div>
      </div>
    </a>
    <a [routerLink]="['validation']" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Formularvalidierung</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Iteration3Component { }
