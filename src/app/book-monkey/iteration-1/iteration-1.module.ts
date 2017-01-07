import { NgModule } from '@angular/core';

import { AppModule as AppModuleBookList } from './components/app.module';
import { AppModule as AppModuleBookListRefactored } from './property-bindings/app.module';
import { AppModule as AppModuleBookDetails } from './event-bindings/app.module';

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
export class Iteration1Module { }


