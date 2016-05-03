import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';

import {SamplesAppComponent} from './app/';

bootstrap(SamplesAppComponent, [
  ROUTER_PROVIDERS
]);
