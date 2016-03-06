export class Book {
    //isbn - identifier
    //title
    //authors
    subtitle: string;
    rating: number;
    published: Date;

    constructor(public isbn: string, public title: string, public authors: string[]) {
    }
}
