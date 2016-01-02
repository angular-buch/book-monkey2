import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/router';
import BookMonkey from './app/book-monkey';

bootstrap(BookMonkey, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
