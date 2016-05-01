import {Component, Input} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Book} from '../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-details',
  moduleId: __moduleName,
  templateUrl: 'book-details.component.html',
  providers: [BookStoreService],
  directives: [ROUTER_DIRECTIVES]
})
export class BookDetailsComponent {
  book: Book;

  constructor(private params: RouteParams, private bs: BookStoreService, private router: Router) {}

  ngOnInit(){
    this.bs.getSingle(this.params.get('isbn'))
      .subscribe(res => this.book = res);
  }

  getRating(num: number){
    return new Array(num);
  }

  deleteBook(){
    if(confirm("Buch wirklich löschen?")){
       this.bs.delete(this.params.get('isbn'))
              .subscribe(res => this.router.navigate(['../List']));
    }
  }
}
