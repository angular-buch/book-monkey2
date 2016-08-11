import { RouterConfig } from '@angular/router';

export const IterationRoutes: RouterConfig = [
    {
        path: '',  
        redirectTo: '/book-list'
    },
    {
        path: 'book-list',
        loadChildren: 'app/book-monkey/iteration-1/book-list/app.module.ts#AppModule',
    }
    /*,
    {
        path: 'book-list-refactored',
        loadChildren: './book-list-refactored/app.module.ts#AppModule',
    },
    {
        path: 'book-details',
        loadChildren: './book-details/app.module.ts#AppModule',
    }*/
]