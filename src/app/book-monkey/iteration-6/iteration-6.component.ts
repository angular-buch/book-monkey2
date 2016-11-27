import { Component } from '@angular/core';

@Component({
  template: `
    <div class="ui four small ordered steps">
    <a routerLink="modules" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Module</div>
      </div>
    </a>
    <a routerLink="lazy-loading" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Lazy-Loading</div>
      </div>
    </a>
    <a routerLink="guards" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Guards</div>
      </div>
    </a>
    <a routerLink="resolver" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">Resolver</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Iteration6Component { }
