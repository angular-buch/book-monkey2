import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/';



export const routes: Routes = [
    { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
