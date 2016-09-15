import { NgModule } from '@angular/core';

import { AppModule as AppModuleForms } from './forms/app.module';
import { AppModule as AppModuleValidation } from './validation/app.module';

import { Iteration3Component } from './iteration-3.component';
import { Iteration3Routing } from './iteration-3.routing';

@NgModule({
  declarations: [Iteration3Component],
  imports: [
    AppModuleForms,
    AppModuleValidation,
    Iteration3Routing]
})
export class Iteration3Module { }


