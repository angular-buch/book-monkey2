import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookStoreService } from './shared/book-store.service';
import { AppRoutingModule } from './app-routing.module.one-app';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
