import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {

  let service: BookStoreService;

  beforeEach(() => {
<TEX>\boldline</TEX>    service = new BookStoreService();
  });

  it('should hold a hardcoded list of 2 books', () => {
<TEX>\boldline</TEX>    const books = service.getAll();
<TEX>\boldline</TEX>    expect(books.length).toBe(2);
  });
});
