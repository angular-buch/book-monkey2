import { NgModule } from '@angular/core';

import { AppModule as AppModuleComponent } from './components/app.module';
import { AppModule as AppModulePropertyBindings } from './property-bindings/app.module';
import { AppModule as AppModuleEventBindings } from './event-bindings/app.module';

import { Iteration1Component } from './iteration-1.component';
import { Iteration1RoutingModule } from './iteration-1-routing.module';

@NgModule({
  declarations: [Iteration1Component],
  imports: [
    AppModuleComponent,
    AppModulePropertyBindings,
    AppModuleEventBindings,
    Iteration1RoutingModule
  ]
})
export class Iteration1Module { }


