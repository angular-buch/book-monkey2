import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';



@Component({
  selector: 'iteration-4',
  template: `
    <div class="ui one small ordered steps">
    <a [routerLink]="['http']"
       class="step">
      <div class="content">
        <div class="title">Http</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class IterationFourComponent { }
