import {bootstrap} from 'angular2/platform/browser';
import {SamplesApp} from './app/samples';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(SamplesApp, [
  ROUTER_PROVIDERS
]);
