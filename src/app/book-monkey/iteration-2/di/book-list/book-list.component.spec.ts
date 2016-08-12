import { addProviders, async, inject, beforeEachProviders } from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { BookListComponent } from './book-list.component';
import { BookStoreService } from '../shared/book-store.service';

describe('[iteration-2/di] Component: BookList', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([BookStoreService, BookListComponent]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BookListComponent], (component: BookListComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BookListComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BookListComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <book-list></book-list>
  `,
  directives: [BookListComponent]
})
class BookListComponentTestController {
}
