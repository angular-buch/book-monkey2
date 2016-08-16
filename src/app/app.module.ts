import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/';

import { routing } from './app.routing'


@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }