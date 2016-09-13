import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  repositoryUrl: string;
  repoName: string;

  constructor(r: Router) {
    r.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(e => {

        let url: string = (<any>e).urlAfterRedirects;

        if ((url.match(/\//g) || []).length < 2) {
          this.repoName = '/';
        } else {
          this.repoName = url.replace(/\//g, '-').replace(/^-/, '/');
        }

        this.repositoryUrl = 'https://github.com/book-monkey2-build' + this.repoName;
      });
  }
}
