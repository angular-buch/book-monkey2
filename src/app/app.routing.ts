import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';



export const routes: Routes = [
    { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
