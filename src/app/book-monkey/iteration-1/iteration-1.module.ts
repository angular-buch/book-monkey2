import { NgModule } from '@angular/core';
import { IterationOneComponent } from './iteration-1.component';
import { RouterModule } from '@angular/router'
import { IterationRoutes } from './app.routes'

@NgModule({
  declarations: [
    IterationOneComponent
  ],
  imports: [
    RouterModule.forChild(IterationRoutes),
  ],
  providers: [],
  bootstrap: [IterationOneComponent]
})
export class AppModule { }