export default class Book {

    //isbn - PRIMARY KEY
    //title
    //authors
    subtitle: string;
    rating: number;
    published: Date;

    constructor(public isbn: string, public title: string, public authors: string[]) {
    }
}
