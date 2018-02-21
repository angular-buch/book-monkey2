import { BookListComponent } from './book-list.component';
import { Book } from '../shared/book';

describe('BookListComponent', () => {

  let component: BookListComponent;

  beforeEach(() => {/*TEX:\bfs*/
    component = new BookListComponent();/*TEX:\bfe*/
  });

  it('should hold a hardcoded list of 2 books', () => {
    component./*TEX:\bfs*/ngOnInit()/*TEX:\bfe*/; /*TEX:\bfs*/// manual call!/*TEX:\bfe*/
    expect(component.books.length).toBe(2);
  });

  it('should trigger an event on "showDetails"', () => {

    const sendBook = new Book('x', 'x', null, new Date());
    let receivedBook: Book;

    component./*TEX:\bfs*/showDetailsEvent
      .subscribe((book) => receivedBook = book);/*TEX:\bfe*/
    component./*TEX:\bfs*/showDetails/*TEX:\bfe*/(sendBook);

    expect(sendBook).toBe(receivedBook);
  });
});
