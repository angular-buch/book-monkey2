import Thumbnail from './thumbnail';
export { default as Thumbnail } from './thumbnail';

export default class Book {
    //isbn - identifier
    //title
    //authors
    subtitle: string;
    thumbnails: Thumbnail[];
    rating: number;
    published: Date;

    constructor(public isbn: string, public title: string, public authors: string[]) { }
}
