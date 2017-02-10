import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui four small ordered steps">
    <a routerLink="modules" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Internationalisierung (i18n)</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Iteration7Component { }
