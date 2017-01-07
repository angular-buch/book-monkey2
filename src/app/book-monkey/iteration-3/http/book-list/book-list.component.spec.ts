import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from '../app.component';
import { BookListComponent } from './book-list.component';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({ template: '<router-outlet></router-outlet>' })
class DummyOutletComponent { }

@Component({
  selector: 'a.bm-book-list-item',
  template: 'Dummy'
})
class DummyBookListItemComponent {
  @Input() book: Book;
}

@Component({ template: 'Dummy' })
class DummyDetailsComponent { }

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  let expectedBooks = [
    new Book('111', 'Book 1', [], new Date()),
    new Book('222', 'Book 2', [], new Date())
  ];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
        declarations: [
          DummyOutletComponent,
          BookListComponent,
          DummyBookListItemComponent,
          DummyDetailsComponent],
        providers: [{
          provide: BookStoreService,
          useValue: { getAll: () => Observable.of(expectedBooks) }
        }],
        imports: [
          RouterTestingModule.withRoutes([
            { path: ':isbn', component: DummyDetailsComponent }
          ])
        ]
      })
      .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.createComponent(DummyOutletComponent);
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should get all books from BookStoreService', () => {

    expect(component.books.length).toBe(2);
    expect(component.books[0].isbn).toBe('111');
    expect(component.books[1].isbn).toBe('222');
  });

  it('should navigate to details page by ISBN', async(inject([Location], (location) => {

    fixture.nativeElement.querySelector('a').click();

    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/111');
    });
  })));
});
