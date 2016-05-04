import {Component, Input} from '@angular/core';
import {Router, UrlSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {Book} from '../domain/book';
import {BookStoreService} from '../services/books/book-store.service';
import {IsbnPipe} from '../pipes/isbn-pipe/isbn-pipe'

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.component.html',
  providers: [BookStoreService],
  directives: [ROUTER_DIRECTIVES],
  pipes: [IsbnPipe]
})
export class BookDetailsComponent {
  book: Book;

  constructor(private params: UrlSegment, private bs: BookStoreService, private router: Router) {}

  ngOnInit(){
    this.bs.getSingle(this.params.segment('isbn'))
      .subscribe(res => this.book = res);
  }

  getRating(num: number){
    return new Array(num);
  }

  deleteBook(){
    if(confirm("Buch wirklich löschen?")){
       this.bs.delete(this.params.segment('isbn'))
              .subscribe(res => this.router.navigate(['../List']));
    }
  }
}
