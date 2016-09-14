import { NgModule } from '@angular/core';

import { AppModule as AppModuleDi } from './di/app.module';
import { AppModule as AppModuleNavigation } from './navigation/app.module';

import { Iteration2Component } from './iteration-2.component';
import { Iteration2Routing } from './iteration-2.routing';

@NgModule({
  declarations: [Iteration2Component],
  imports: [
    AppModuleDi,
    AppModuleNavigation,
    Iteration2Routing]
})
export class Iteration2Module { }


