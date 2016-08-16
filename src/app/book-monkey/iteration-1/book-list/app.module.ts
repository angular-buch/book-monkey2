import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [CommonModule],
  providers: []
})
export default class AppModule { }