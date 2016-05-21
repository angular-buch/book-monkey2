import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {BookMonkeyAppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(BookMonkeyAppComponent, [ROUTER_PROVIDERS]);
