import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // NEW
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BookStoreService } from './shared/book-store.service';
import { AppRoutingModule } from './app-routing.module.one-app';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    BookStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
