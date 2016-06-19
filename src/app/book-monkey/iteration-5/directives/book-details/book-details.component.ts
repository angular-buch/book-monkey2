import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../domain/book';
import { BookStoreService } from '../services/books/book-store.service';
import { IsbnPipe } from '../pipes/isbn-pipe/isbn-pipe'

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.component.html',
  providers: [BookStoreService],
  directives: [ROUTER_DIRECTIVES],
  pipes: [IsbnPipe]
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.bs.getSingle(params['isbn'])
        .subscribe(b => this.book = b);
    });
  }

  getRating(num: number){
    return new Array(num);
  }

 deleteBook(){
   if(confirm("Buch wirklich löschen?")) {
     this.bs.delete(this.book.isbn)
            .subscribe(res => this.router.navigate(['../']));
   }
 }
}
