import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { OnActivate, RouteSegment, Router } from '@angular/router';
import { Book } from '../domain/book';
import { BookStoreService } from '../services/books/book-store.service';

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.component.html',
  providers: [BookStoreService],
  directives: [ROUTER_DIRECTIVES]
})
export class BookDetailsComponent implements OnActivate {
  book: Book;
  curr: RouteSegment;

  constructor(private bs: BookStoreService, private router: Router) { }

  routerOnActivate(seg: RouteSegment):void {
    this.curr = seg;
    this.book = this.bs.getSingle(this.curr.getParam('isbn'));
  }

  getRating(num: number){
    return new Array(num);
  }

 deleteBook(){
   if(confirm("Buch wirklich löschen?")) {
     this.bs.delete(this.book.isbn);
     this.router.navigate(['../'], this.curr);
   }
 }
}
