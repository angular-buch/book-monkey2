import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui three small ordered steps">
      <a routerLink="components" routerLinkActive="active" class="step">
        <div class="content">
          <div class="title">Komponenten</div>
        </div>
      </a>
      <a routerLink="property-bindings" routerLinkActive="active" class="step">
        <div class="content">
          <div class="title">Property-Bindings</div>
        </div>
      </a>
      <a routerLink="event-bindings" routerLinkActive="active" class="step">
        <div class="content">
          <div class="title">Event-Bindings</div>
        </div>
      </a>
    </div>
    <div class="ui raised padded container segment">
      <router-outlet></router-outlet>
    </div>
  `
})
export class Iteration1Component { }
