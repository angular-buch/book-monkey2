import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'iteration-1',
    loadChildren: 'app/book-monkey/iteration-1/iteration-1.module#Iteration1Module'
  },
  {
    path: 'iteration-2',
    loadChildren: 'app/book-monkey/iteration-2/iteration-2.module#Iteration2Module'
  },
  {
    path: 'iteration-3',
    loadChildren: 'app/book-monkey/iteration-3/iteration-3.module#Iteration3Module'
  },
  {
    path: 'iteration-4',
    loadChildren: 'app/book-monkey/iteration-4/iteration-4.module#Iteration4Module'
  },
  {
    path: 'iteration-5',
    loadChildren: 'app/book-monkey/iteration-5/iteration-5.module#Iteration5Module'
  },
  {
    path: 'iteration-6',
    loadChildren: 'app/book-monkey/iteration-6/iteration-6.module#Iteration6Module'
  },
  {
    path: 'iteration-7',
    loadChildren: 'app/book-monkey/iteration-7/iteration-7.module#Iteration7Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
