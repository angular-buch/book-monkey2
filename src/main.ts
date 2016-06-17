import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent, environment, AppRoutes } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideRouter(AppRoutes)
]);
