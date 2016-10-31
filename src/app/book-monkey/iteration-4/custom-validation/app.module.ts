import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';

import { BookStoreService } from './shared/book-store.service';
import { BookValidators } from './shared/book-validators';

import { AppRoutingModule } from './app-routing.module.one-app';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    DateValueAccessorModule
  ],
  providers: [
    BookStoreService,
    BookValidators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
