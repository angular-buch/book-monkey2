import {Thumbnail} from './thumbnail';
export {Thumbnail} from './thumbnail';

export class Book {
    //isbn - identifier
    //title
    //authors
    subtitle: string;
    thumbnails: Thumbnail[];
    rating: number;
    published: Date;

    constructor(public isbn: string, public title: string, public authors: string[]) { }
}
