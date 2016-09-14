import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Iteration1Module } from './book-monkey/iteration-1/iteration-1.module';
import { Iteration2Module } from './book-monkey/iteration-2/iteration-2.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    Iteration1Module,
    Iteration2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
