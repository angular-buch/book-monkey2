import { Book } from './book';

export class BookFactory {

  static empty(): Book {
    return new Book('', '', [''], new Date(), '', 0, [{url: '', title: ''}], '');
  }

  static fromObject(rawBook: any): Book {
    return new Book(
      rawBook.isbn,
      rawBook.title,
      rawBook.authors,
      typeof(rawBook.published) === 'string' ?
        new Date(rawBook.published) : rawBook.published,
      rawBook.subtitle,
      rawBook.rating,
      rawBook.thumbnails,
      rawBook.description,
    );
  }
}
