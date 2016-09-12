import { NgModule } from '@angular/core';

import { AppModule as AppModule1 } from './book-list/app.module';
import { AppModule as AppModule2 } from './book-list-refactored/app.module';
import { AppModule as AppModule3 } from './book-details/app.module';

import { Iteration1Component } from './iteration-1.component';
import { iteration1Routing } from './iteration-1.routing';

@NgModule({
  declarations: [Iteration1Component],
  imports: [
    AppModule1,
    AppModule2,
    AppModule3,
    iteration1Routing]
})
export class Iteration1Module { }


