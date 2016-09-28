import { NgModule } from '@angular/core';

import { AppModule as AppModuleBookList } from './book-list/app.module';
import { AppModule as AppModuleBookListRefactored } from './book-list-refactored/app.module';
import { AppModule as AppModuleBookDetails } from './book-details/app.module';

import { Iteration1Component } from './iteration-1.component';
import { Iteration1RoutingModule } from './iteration-1-routing.module';

@NgModule({
  declarations: [Iteration1Component],
  imports: [
    AppModuleBookList,
    AppModuleBookListRefactored,
    AppModuleBookDetails,
    Iteration1RoutingModule
  ]
})
export default class Iteration1Module { }


