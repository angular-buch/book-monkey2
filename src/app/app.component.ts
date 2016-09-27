import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'br-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  repositoryUrl: string;
  repoName: string;

  constructor(r: Router) {
    r.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(e => {

        let url: string = (<any>e).urlAfterRedirects;
        let amountOfSlashes = (url.match(/\//g) || []).length;

        if (amountOfSlashes < 2) {
          this.repoName = 'one-app';
        } else {
          let parts = url.split('/');
          this.repoName = parts[1] + '-' + parts[2];
        }

        this.repositoryUrl = 'https://github.com/book-monkey2-build/' + this.repoName;
      });
  }
}
