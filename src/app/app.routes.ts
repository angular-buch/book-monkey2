import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const IterationRoutes: RouterConfig = [
    {
        path: '',          
        component: HomeComponent
    },
    {
        path: 'iteration-1',
        loadChildren: 'app/book-monkey/iteration-1/iteration-1.module#IterationOneModule'
    }
    /*,
    {
        path: 'iteration-2',
        loadChildren: './book-monkey/iteration-2/iteration-2.module#IterationTwoModule'
    },
    {
        path: 'iteration-3',
        loadChildren: './book-monkey/iteration-3/iteration-3.module#IterationThreeModule'
    },
    {
        path: 'iteration-4',
        loadChildren: './book-monkey/iteration-4/iteration-4.module#IterationFourModule'
    },
    {
        path: 'iteration-5',
        loadChildren: './book-monkey/iteration-5/iteration-5.module#IterationFiveModule'
    }*/
];

