import {Thumbnail} from './thumbnail';

export class Book {
  subtitle: string;
  description: string;
  rating: number;
  published: Date;
  private authors: Array<string> = [];
  private thumbnails: Array<Thumbnail> = [];

  constructor(public isbn: string, public title: string) { }

  addAuthor(author: string): void {
    this.authors.push(author);
  }

  addThumbnail(url: string, title: string): void {
    this.thumbnails.push(new Thumbnail(url, title));
  }
}
