import { Component } from '@angular/core';

@Component({
  template: `
  <div class="ui two small ordered steps">
    <a routerLink="http" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">HTTP</div>
      </div>
    </a>
    <a routerLink="rxjs" routerLinkActive="active" class="step">
      <div class="content">
        <div class="title">RxJS</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `
})
export class Iteration3Component { }
