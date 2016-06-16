import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home/index';
import { BooksComponent } from './books/index';

export const AppRoutes: RouterConfig = [
  { path: '/home',  component: HomeComponent, index: true },
  { path: '/books', component: BooksComponent }
]