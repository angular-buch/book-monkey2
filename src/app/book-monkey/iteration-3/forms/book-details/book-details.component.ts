import {Component, Input} from '@angular/core';
import {Router, UrlSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {Book} from '../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.component.html',
  providers: [BookStoreService],
  directives: [ROUTER_DIRECTIVES]
})
export class BookDetailsComponent {
  book: Book;

  constructor(private params: UrlSegment, private bs: BookStoreService, private router: Router) {
    this.book = bs.getSingle(params.segment('isbn'));
  }

  getRating(num: number){
    return new Array(num);
  }

  deleteBook(){
    if(confirm("Buch wirklich löschen?")){
       this.bs.delete(this.params.segment('isbn'))
       this.router.navigate(['../List']);
    }
  }
}
