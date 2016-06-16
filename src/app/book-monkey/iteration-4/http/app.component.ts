import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'book-monkey-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styles: [
    `.router-link-active {
      color: #ffffff !important;
      background: #DB282C !important;
    }`
  ],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent { }
