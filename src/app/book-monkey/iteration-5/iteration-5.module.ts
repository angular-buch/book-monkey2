import { NgModule } from '@angular/core';

import { AppModule as AppModuleForms } from './directives/app.module';
import { AppModule as AppModuleValidation } from './pipes/app.module';

import { Iteration5Component } from './iteration-5.component';
import { Iteration5Routing } from './iteration-5.routing';

@NgModule({
  declarations: [Iteration5Component],
  imports: [
    AppModuleForms,
    AppModuleValidation,
    Iteration5Routing]
})
export class Iteration5Module { }


