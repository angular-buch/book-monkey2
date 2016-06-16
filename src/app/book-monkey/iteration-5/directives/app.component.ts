import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { ActiveClassDirective } from './directives/active-class/active-class.directive';

@Component({
  selector: 'book-monkey-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES /*, ActiveClassDirective*/],
  providers: [HTTP_PROVIDERS]
})
export class BookMonkeyAppComponent { }
