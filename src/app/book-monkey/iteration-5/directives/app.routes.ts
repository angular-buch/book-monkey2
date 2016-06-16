import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home/index';
import { BooksComponent } from './books/index';
import { AdminComponent } from './admin/index';

export const AppRoutes: RouterConfig = [
  { path: '/home',  component: HomeComponent, index: true },
  { path: '/books', component: BooksComponent },
  { path: '/admin', component: AdminComponent }
]