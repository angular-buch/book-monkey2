import { RouterModule } from '@angular/router';
import { IterationOneComponent } from './iteration-1.component';

export const routing = RouterModule.forChild([
    { path: '', redirectTo: 'book-list', pathMatch: 'full' },
    { path: 'book-list', loadChildren: 'app/book-monkey/iteration-1/book-list/app.module.ts#AppModule' },  
    /*,
    {
        path: 'book-list-refactored',
        loadChildren: './book-list-refactored/app.module.ts#AppModule',
    },
    {
        path: 'book-details',
        loadChildren: './book-details/app.module.ts#AppModule',
    }*/
]);