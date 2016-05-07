import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {BookMonkeyApp as PipesApp} from './pipes/book-monkey';
import {BookMonkeyApp as DirectivesApp} from './directives/book-monkey';

import {ActiveClassDirective} from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-5',
  template: `
    <div class="ui two small ordered steps">
    <a [routerLink]="['pipes']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Pipes</div>
      </div>
    </a>
    <a [routerLink]="['directives']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Direktiven</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})
@Routes([
  {path: '/',           component: PipesApp},
  {path: '/pipes',      component: PipesApp},
  {path: '/directives', component: DirectivesApp}
])
export class IterationFiveComponent { }
