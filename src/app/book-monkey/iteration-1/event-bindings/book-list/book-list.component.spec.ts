import { BookListComponent } from './book-list.component';
import { Book } from '../shared/book';

describe('BookListComponent', () => {

  let component: BookListComponent;

  beforeEach(() => {
    component = new BookListComponent();
  });

  it('should hold a hardcoded list of 2 books', () => {
    component.<TEX>\bfseries ngOnInit()</TEX>; <TEX>\bfseries // manual call!</TEX>
    expect(component.books.length).toBe(2);
  });

  it('should trigger an event on "showDetails"', () => {

    const sendBook = new Book('x', 'x', null, new Date());
    let receivedBook: Book;

    component.<TEX>\bfseries showDetailsEvent.subscribe</TEX>((book) => receivedBook = book);
    component.<TEX>\bfseries showDetails</TEX>(sendBook);

    expect(sendBook).toBe(receivedBook);
  });
});
