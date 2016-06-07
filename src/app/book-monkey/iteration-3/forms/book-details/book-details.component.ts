import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { OnActivate, RouteSegment, RouteTree } from '@angular/router';
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

  constructor(private bs: BookStoreService) { }

  routerOnActivate(curr: RouteSegment):void {
    var isbn = curr.getParam('isbn');
    this.book = this.bs.getSingle(isbn);
  }

  getRating(num: number){
    return new Array(num);
  }

 deleteBook(){
   if(confirm("Buch wirklich löschen?")) {
    //  this.bs.delete(this.params.segment('isbn'))
    //  this.router.navigate(['../List']);
   }
 }
}
