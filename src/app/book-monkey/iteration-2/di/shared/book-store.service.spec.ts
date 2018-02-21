import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  let service: BookStoreService;

  beforeEach(() => {/*TEX:\bfs*/
    service = new BookStoreService();/*TEX:\bfe*/
  });

  it('should hold a hardcoded list of 2 books', () => {/*TEX:\bfs*/
    const books = service.getAll();
    expect(books.length).toBe(2);/*TEX:\bfe*/
  });
});
