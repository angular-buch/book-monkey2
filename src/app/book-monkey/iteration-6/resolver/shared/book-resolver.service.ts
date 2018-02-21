import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Book } from './book';
import { BookStoreService } from './book-store.service';

@Injectable()
export class BookResolver /*TEX:\bfs*/implements Resolve<Book>/*TEX:\bfe*/ {

  constructor(private bs: BookStoreService) { }

  /*TEX:\bfs*/resolve(route: ActivatedRouteSnapshot): Observable<Book>/*TEX:\bfe*/ {
    return this.bs.getSingle(route.params['isbn']);
  }

}
