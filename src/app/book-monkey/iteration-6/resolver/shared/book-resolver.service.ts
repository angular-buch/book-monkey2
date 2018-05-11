import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Book } from './book';
import { BookStoreService } from './book-store.service';

@Injectable()
export class BookResolver implements Resolve<Book> {

  constructor(private bs: BookStoreService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Book> {
    return this.bs.getSingle(route.params['isbn']);
  }

}
