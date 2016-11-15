import { BookListComponent } from './book-list.component';
import { Book } from '../shared/book';

describe('BookListComponent', () => {

  let component: BookListComponent;

  beforeEach(() => {
    component = new BookListComponent();
  });

  it('should hold a hardcoded list of 2 books', () => {
    component.ngOnInit(); // manual call!
    expect(component.books.length).toBe(2);
  });

  it('should trigger an event on "showDetails"', () => {

    let sendBook = new Book('x', 'x', null, new Date());
    let receivedBook: Book;

    component.showDetailsEvent.subscribe((book) => receivedBook = sendBook)
    component.showDetails(sendBook);

    expect(sendBook).toBe(receivedBook);
  });
});