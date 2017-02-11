import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-home',
  template: `
  <div class="ui container two column grid">

    <div class="ui container column">
      <h1 i18n="HomeComponent:header|">Home</h1>
      <p i18n="HomeComponent:tagline|a proud sentence about the project">Das ist der BookMonkey.</p>
      <a routerLink="../books" class="ui red button">

        <!--i18n: HomeComponent:book list link|Text of the link to the books screen -->Buchliste ansehen<!--/i18n-->

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
