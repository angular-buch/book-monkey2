import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BookStoreService } from './shared/book-store.service';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BookStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
