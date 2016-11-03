import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
