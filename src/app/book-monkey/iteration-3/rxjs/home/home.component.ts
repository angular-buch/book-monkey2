import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-home',
  template: `
  <div class="ui container two column grid">

    <div class="ui container column">
      <h1>Home</h1>
      <p>Das ist der BookMonkey.</p>
      <a routerLink="../books" class="ui red button">
        Buchliste ansehen
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
