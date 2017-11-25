import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import { debounceTime, map, startWith } from 'rxjs/operators';

declare var window: any;

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  repositoryUrl: string;
  repoName: string;
  mobileLayout = false;
  showSidebar = false;

  constructor(private r: Router) { }

  ngOnInit() {
    this.r.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(e => {

        const url: string = (<any>e).urlAfterRedirects;
        const amountOfSlashes = (url.match(/\//g) || []).length;

        if (amountOfSlashes < 2) {
          this.repoName = 'book-monkey2';
          this.repositoryUrl = 'https://github.com/angular-buch/book-monkey2';
          return;
        } else {
          const parts = url.split('/');
          this.repoName = parts[1] + '-' + parts[2];
        }

        this.repositoryUrl = 'https://github.com/book-monkey2-build/' + this.repoName;
      });

    Observable.fromEvent(window, 'resize').pipe(
      debounceTime(100),
      map((e: any) => e.target.innerWidth),
      startWith(window.innerWidth)
    )
    .subscribe(iw => this.mobileLayout = iw < 767);
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}

