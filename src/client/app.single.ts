import {bootstrap} from 'angular2/platform/browser';
import {BookMonkeyApp} from './app/book-monkey';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(BookMonkeyApp, [
  ROUTER_PROVIDERS
]);