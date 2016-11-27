import { Thumbnail } from './thumbnail';
export { Thumbnail } from './thumbnail';

export class Book {

  static empty(): Book {
    return new Book('', '', [''], new Date(), '', 0, [{ url: '', title: '' }], '');
  }

  constructor(
    public isbn: string,
    public title: string,
    public authors: string[],
    public published: Date,
    public subtitle?: string,
    public rating?: number,
    public thumbnails?: Thumbnail[],
    public description?: string
  ) { }
}
