import { NgModule } from '@angular/core';

import { AppModule as AppModuleHttp } from './http/app.module';

import { Iteration4Component } from './iteration-4.component';
import { Iteration4Routing } from './iteration-4.routing';

@NgModule({
  declarations: [Iteration4Component],
  imports: [
    AppModuleHttp,
    Iteration4Routing]
})
export class Iteration4Module { }


