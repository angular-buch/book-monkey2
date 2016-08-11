import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { IterationRoutes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(IterationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }