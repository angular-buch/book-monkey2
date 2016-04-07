import {Thumbnail} from './thumbnail';
export {Thumbnail} from './thumbnail';

export class Book {
  subtitle: string;
  rating: number;
  published: Date;
  description: string;
  thumbnails: Thumbnail[];

  constructor(
    public isbn: string,
    public title: string,
    public authors: string[]) { }
}
