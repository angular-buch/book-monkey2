import { RouterModule } from '@angular/router';
import { IterationOneComponent } from './iteration-1.component';

export const routing = RouterModule.forChild([
    { path: '', redirectTo: 'book-list', pathMatch: 'full' }
]);
