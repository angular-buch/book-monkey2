import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home/index';
import { BookListComponent } from './book-list/index';
import { BookDetailsComponent } from './book-details/index';

export const AppRoutes: RouterConfig = [
  {
    path: '',  
    redirectTo: 'home'
  },
  { 
    path: 'home',  
    component: HomeComponent 
  },
  { 
    path: 'books', 
    component: BookListComponent
  }, 
  {
    path: 'books/:isbn', 
    component: BookDetailsComponent 
  }
]