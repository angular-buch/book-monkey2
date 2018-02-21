import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-home',
  template: `
  <div class="ui container two column grid">

    <div class="ui container column">
      <h1 i18n="@@HomeComponent:header">Home</h1>
      <p i18n="a proud sentence about the project@@HomeComponent:tagline">Das ist der BookMonkey.</p>
      <a routerLink="../books" class="ui red button">

        <ng-container i18n="Text of the link to the books screen@@HomeComponent:book list link">Buchliste ansehen</ng-container>

        <i class="right arrow icon"></i>
      </a>
    </div>

    <bm-search (bookSelected)="bookSelected($event)" class="column"></bm-search>
  </div>
  `
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  bookSelected(book: Book) {
    this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
  }
}
