import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styles: [
    `.router-link-active {
      color: #ffffff !important;
      background: #DB282C !important;
    }`
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
