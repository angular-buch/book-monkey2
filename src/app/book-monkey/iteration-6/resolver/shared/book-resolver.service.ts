import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Book } from './book';
import { BookStoreService } from './book-store.service';

@Injectable()
export class BookResolver <TEX>\bfseries implements Resolve<Book></TEX> {

  constructor(private bs: BookStoreService) { }

  <TEX>\bfseries resolve(route: ActivatedRouteSnapshot): Observable<Book></TEX> {
    return this.bs.getSingle(route.params['isbn']);
  }

}
