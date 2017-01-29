import { Component } from '@angular/core';

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

    <bm-search class="right aligned column"></bm-search>
  </div>
  `
})
export class HomeComponent { }
