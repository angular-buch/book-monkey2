import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
