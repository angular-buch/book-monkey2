import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { BookFormComponent } from './book-form/book-form.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { BookValidatorsService } from './shared/book-validators.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ],
  declarations: [BookFormComponent],
  providers: [BookValidatorsService]
})
export class AdminModule { }
