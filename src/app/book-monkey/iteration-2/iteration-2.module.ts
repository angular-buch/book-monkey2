import { NgModule } from '@angular/core';

import { Iteration2Component } from './iteration-2.component';
import { AppModule as AppModuleDi } from './di/app.module';
import { Iteration2Routing } from './iteration-2.routing';

@NgModule({
  declarations: [Iteration2Component],
  imports: [Iteration2Routing, AppModuleDi]
})
export default class Iteration2Module { }


