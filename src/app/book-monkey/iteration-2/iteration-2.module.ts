import { NgModule } from '@angular/core';

import { Iteration2Component } from './iteration-2.component';
import { AppModule as AppModuleDi } from './di/app.module';
import { Iteration2RoutingModule } from './iteration-2-routing.module';

@NgModule({
  declarations: [Iteration2Component],
  imports: [Iteration2RoutingModule, AppModuleDi]
})
export default class Iteration2Module { }


