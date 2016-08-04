import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'book-details',
  moduleId: module.id,
  templateUrl: 'book-details.component.html',
  providers: [BookStoreService],
  directives: [ROUTER_DIRECTIVES]
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit():void {
    this.book = new Book('', '', [''], new Date(), '', 0, [{url:'', title: ''}], '');  
    
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
