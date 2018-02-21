import { Component, OnInit } from '@angular/core';/*TEX:\bfs*/
import { Observable } from 'rxjs/Observable';/*TEX:\bfe*/

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {/*TEX:\bfs*/
  books$: Observable<Book[]>;/*TEX:\bfe*/

  constructor(private bs: BookStoreService) { }

  ngOnInit() {/*TEX:\bfs*/
    this.books$ = this.bs.getAll();/*TEX:\bfe*/
  }
}
